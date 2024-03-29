import {SiteLogic} from './generic';

const orig = "tonquerzlawicvfjpsyhgdmkbxJKABRUDQZCTHFVLIWNEYPSXGOM";
const jumbled =    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

export class ChrysGardenLogic extends SiteLogic {
    constructor() {
        super();
        this.fontMap = new Map();
        this.pw = '';

        for (let index in jumbled) {
            this.fontMap.set(jumbled[index], orig[index]);
        }

    }
    processMetadata(index_html) {
        let metadata = null;

        try {
            let author = document.querySelector('.novel-info').innerText.match(/Author: (.+)/)[1];
            let title = document.querySelector('.novel-title').innerText.replace(/(\r\n|\n|\r)/gm, " ");
            let id = '000'; //document.querySelector('#clickNovelid').innerText;
            let genre = document.querySelector('.series-genre').innerText;
            let cover = document.querySelector('.novel-cover img').getAttribute('src');

            metadata = {
                id: id,
                title: title,
                author: author,
                genre: genre,
                images: [],
                contents: 'Table of Contents',
                language: 'en'
            };
        } catch (err) {
            console.debug(err);
        } finally {
            return metadata;
        }
    }

    getChapterlist(index_html) {
        let chapters = [];
        let rows = index_html.querySelectorAll('.chapter-item a');
        rows.forEach((row, i) => {
            let targeturl = row.getAttribute("href");
            let titlesplit = row.innerText.match(/(?:Ch |Ch|Chapter )([.\d]+)(?: - (.+))?/);
            if (titlesplit) {
                chapters.push({title: titlesplit[2], url: targeturl, num: titlesplit[1], summary: null});
            } else {
                chapters.push({title: null, url: targeturl, num: i, summary: null});
            }
        });
        return chapters
    }

    async getChapter(page_html) {
        let ch_text = [];
        let ch_body = page_html.querySelector('#novel-content');

        if (ch_body) {
            let paras = ch_body.querySelectorAll("p");

            paras.forEach( (p) => {
                let clean_p = [];
                if (p.style.overflow == "hidden") {
                    // Ignore it
                } else {
                p.childNodes.forEach(node => {
                    if (node.nodeName.match(/span/i)) {
                        if (node.style.overflow == "hidden") {
                            // Ignore it
                        }
                        else if (node.classList.contains("jum")) {
                            clean_p.push(this.fontRemap(node.innerText));
                        } else {
                            let content = node.innerText.trim();
                            if (content.length > 0) {
                                clean_p.push(node.innerHTML);
                            }
                        }
                    } else if (node.nodeType == 3) {
                        // Text-only node
                        clean_p.push(node.textContent);
                    } else {
                        clean_p.push(node.outerHTML);
                    }
                });
            }
                ch_text.push(clean_p.join(""));
            });

            return "<p>" + ch_text.join('</p><p>') + "</p>";
        } else {
                return null;
        }
    }

    fontRemap(block) {
        let newStr = "";

        for (const c of block) {
            let newChar = this.fontMap.get(c) || c;
            newStr += newChar;
        }
        return newStr;

    }

    async chapterXHR(chapter) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", chapter.url, false);
        xhr.send(null);
        const parser = new DOMParser();
        let chapter_frag = parser.parseFromString(xhr.responseText, "text/html");

        let pw_form = chapter_frag.querySelector('#password-lock');

        // pw-locked chapter
        if (pw_form) {
            let form = new FormData(pw_form);
            form.set('site-pass', this.pw);
            xhr.open("POST", chapter.url, false);
            xhr.send(form);
            chapter_frag = parser.parseFromString(xhr.responseText, "text/html");
        }

        let ch_content = await this.getChapter(chapter_frag);
        if (ch_content) {
            return this.buildChapter(chapter.title, chapter.num, chapter.summary, ch_content);
        } else {
            return null;
        }

    }

    chapterTab(chapter, data) {
        const parser = new DOMParser();
        let chapter_frag = parser.parseFromString(data, "text/html");
        let ch_content = this.getChapter(chapter_frag);
        return ch_content.then(data => {
            if (data) {
                return this.buildChapter(chapter.title, chapter.num, chapter.summary, data);
            } else {
                return null;
            }
        });
    }

    buildChapter(title, number, summary, content) {
        let ch_title = `${number}`;
        if (title) {
            ch_title = `${number} - ${title}`;
        }
        let ch_body = `<h1>${ch_title}</h1><hr />${content}`
        return {title: ch_title, content: ch_body}
    }

    loadURL(url) {
        const regex = new RegExp(/.*chrysanthemumgarden\.com\/novel-tl\/.*/);
        return regex.test(url);
    }

    usePw() {
        return true;
    }

}
