// Put all the javascript code here, that you want to execute after page load.
var browser = require("webextension-polyfill");
var MESSAGE_TYPE = require('./message_type');
//import {SiteLogic} from './sites/generic';

const MessageType = MESSAGE_TYPE.MessageType;

class ContentScript {
    constructor() {
        this.logic = new SiteLogic();
        this.overlay = document.createElement("div");
        let baseSize = Number(window.getComputedStyle(document.body).getPropertyValue('font-size').match(/\d+/)[0]);
        let width = (document.body.clientWidth - (35 * baseSize)) / 2;
        this.overlay.style = `display: block;width: 35em;background-color: white;height: 10em;z-index: 1000;position: fixed;top: 100px;left: ${width}px;border: 2px solid black;`;
        this.msgArea = document.createElement("div");
        this.msgArea.style = "padding: 2em;text-align: center;font-family: sans-serif;";

        this.overlay.appendChild(this.msgArea);
    }
    setup() {
        browser.runtime.onMessage.addListener( (message, sender) => {this.messageHandler(sender, message)});
        this.injectOverlay();
        this.updateOverlay("Fetching metadata....");
        let metadata = this.logic.processMetadata(document.body);

        this.messageDispatcher(metadata, MessageType.GET_METADATA);
    }
    messageHandler(sender, message) {
        switch (message.type) {
            case MessageType.GET_METADATA:
                this.updateOverlay("Fetching metadata....");
                let metadata = this.logic.processMetadata(document);
                console.log(metadata);
                if (metadata) {
                    this.messageDispatcher(metadata, MessageType.GET_METADATA);
                }
                else {
                    this.updateOverlay("ERROR - couldn't metadata! Make sure you're the novel index page (not a chapter) and try again");
                }
                break;
            case MessageType.GET_CHAPTERLIST:
                let chapterlist = this.logic.getChapterlist(document);
                this.updateOverlay("Fetching chapterlist....");
                this.messageDispatcher(chapterlist, MessageType.GET_CHAPTERLIST);
                break;
            case MessageType.GET_CHAPTER:
                if (message.content.good) {
                    this.updateOverlay(`Got chapter ${message.content.current} of ${message.content.total}`);
                } else {
                    this.updateOverlay(`ERROR couldn't get chapter ${message.content.current} of ${message.content.total}`);
                }
                break;
            case MessageType.FINISHED:
                this.updateOverlay("Finished! Waiting 10sec for font downloads to finish, then generating epub.");
                setTimeout(() => { this.removeOverlay() }, 10000);
                break;

        }
    }

    messageDispatcher(message, type){
        browser.runtime.sendMessage({
            type: type,
            content: message
        });
    }

    injectOverlay() {

        document.body.appendChild(this.overlay);
    }

    updateOverlay(message) {
        this.msgArea.innerHTML = message;
    }

    removeOverlay() {
        this.overlay.remove();
    }
}

const contentScript = new ContentScript();
contentScript.setup();
