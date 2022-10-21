var browser = require("webextension-polyfill");
var JSZip = require("jszip");
var nodepub = require("./nodepub");
var MESSAGE_TYPE = require('./message_type');
//import {SiteLogic} from './sites/generic';

const MessageType = MESSAGE_TYPE.MessageType;

class EpubMaker {
    constructor() {
        this.logic = new SiteLogic();
        this.zip = new JSZip();
    }

    messageHandler(message, sender) {
        switch (message.type) {
            case MessageType.GET_CHAPTER:
                let built_ch = message.content.chapter;
                let chapter_id = parseInt(message.content.id, 10);
                this.epub.addSection(built_ch.title, built_ch.content);
                if (chapter_id < this.chapterlist.length) {
                    this.asyncFetch(chapter_id);
                } else {
                    this.buildFinal();
                }
                break;
            case MessageType.GET_METADATA:
                if (message.content) {
                    this.handleMetadata(message.content);
                    this.messageDispatcher(MessageType.GET_CHAPTERLIST, sender.tab.id);
                }
                break;
            case MessageType.GET_CHAPTERLIST:
                this.handleChapterlist(message.content, sender.tab.id);
                break;

        }
        return true;
    }

    messageDispatcher(type, id, content) {
        browser.tabs.sendMessage(id, {type: type, content: content});
    }

    setup() {
        // Add necessary listeners for things.
        browser.pageAction.onClicked.addListener(function (tab) {
            browser.tabs.executeScript(tab.id, {
                file: "addon/content_script.js"
            });
        });

        browser.runtime.onMessage.addListener( (message, sender) => {this.messageHandler(message, sender);});
    }

    handleMetadata(metadata) {
        this.metadata = metadata;
        this.filename = `${this.metadata.title} - ${this.metadata.author}.epub`;
        this.epub = nodepub.document(this.metadata);
    }

    getCover(url) {
        let coverProm = fetch(url).then( resp => {
            if (resp.ok) {
                return resp.arrayBuffer();
            } else {
                return null;
            }
        }).catch(err => {
            console.debug(err);
            return null;
        })
    }

    getFont(url, name) {
        let xhr = new XMLHttpRequest();
        xhr.responseType = "arraybuffer";
        xhr.open('GET', url);
        xhr.send();

        let loader = (resp) => {
            this.epub.addFonts(xhr.response, name);
        };
        xhr.addEventListener('load', loader);
    }

    convertToXHTML(html_str) {
        return html_str.replaceAll(/<(br|hr|img|embed)([^<>\/]*)>/gi, "<$1$2 />");
    }


    handleChapterlist(chapterlist, sender) {
        this.chapterlist = chapterlist;
        if (this.logic.canXHR()) {
            // Handle in the background
            this.ch_chain = Promise.resolve();
            chapterlist.forEach((chapter, i) => {
                this.ch_chain = this.ch_chain.then( () => {
                let built_ch = this.logic.chapterXHR(chapter);
                return built_ch.then(xhrData => {
                    if (xhrData) {
                    this.messageDispatcher(MessageType.GET_CHAPTER, sender, {
                        total: chapterlist.length,
                        current: i + 1,
                        good: true
                    });

                        this.epub.addSection(xhrData.title, this.convertToXHTML(xhrData.content));
                    } else {
                        this.messageDispatcher(MessageType.GET_CHAPTER, sender, {
                            total: chapterlist.length,
                            current: i + 1,
                            good: false
                        });
                    }
                });
                });

            });
            this.ch_chain.then( vals => {
                this.buildFinal(sender);
            });
        } else {
            // Have to load new tabs
            let newTab = browser.tabs.create({});

            newTab.then((tab) => {
                this.tab_id = tab.id;
                this.asyncFetch(0);
            });

        }
    }

    asyncHandler(evt, chapter) {
        if (evt.tabId == this.tab_id && evt.frameId == 0) {
            let executing = browser.tabs.executeScript(
                this.tab_id, {
                    //code: '(function (){ var startTime = new Date().getTime();' +
                     //   'while (new Date().getTime() < startTime + 5000); return document.body.innerHTML;})();'
                    file: "addon/chapter_script.js"
                });

            executing.then(ch => {
                this.messageDispatcher(MessageType.GET_CHAPTER, this.tab_id, {id: chapter});
            });
        }
    }

    asyncFetch(chapter_id) {
        let chapter = this.chapterlist[chapter_id];
        browser.tabs.update(this.tab_id, {url: chapter.url}); //.then(() => {

        // Remove existing event handler, if we have one.
        if (this.asyncListener) {
            browser.webNavigation.onCompleted.removeListener(this.asyncListener);
        }


        // Build new listener
        this.asyncListener = (evt) => {
            this.asyncHandler(evt, chapter);
        };

        // Add new listener & update tab.
        browser.webNavigation.onCompleted.addListener(this.asyncListener);

        //});
    }

    buildFinal(tab_id){
        let css = this.logic.getCSS();
        if (css) {
            this.epub.addCSS(css);
        }

        this.epub.getFilesForEPUB().then( (files) => {
           this.messageDispatcher(MessageType.FINISHED, tab_id);

            files.forEach(file => {
                let compress = file.compression ? 'DEFLATE' : 'STORE';
                if (file.folder.length > 0) {
                    this.zip.file(`${file.folder}/${file.name}`, file.content, {compression: compress});
                } else {
                    this.zip.file(`${file.name}`, file.content, {compression: compress});
                }
            });
            this.saveFile();
        });

    }

    saveFile() {
        this.zip.generateAsync({type: "blob", mimeType: "application/epub+zip",})
            .then(blob => {
                const objectURL = URL.createObjectURL(blob);
                var downloading = browser.downloads.download(
                    {url: objectURL, filename: this.filename}
                );
                //     .finally(function() {
                //     URL.revokeObjectURL(objectURL);
                // })
                // TODO: figure out how to safely remove the blob url

            });
    }

    loadPageAction(url) {
        return this.logic.loadURL(url);
    }

}



const downloader = new EpubMaker();
downloader.setup();


// browser.runtime.onInstalled.addListener(function() {
//     console.debug("listener added");

browser.webNavigation.onCompleted.addListener(details => {
    if (downloader.loadPageAction(details.url)) {
        console.debug("got true");
        browser.pageAction.show(
            details.tabId
        );
    }
});
// });
