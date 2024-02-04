import { SiteLogic } from './generic';
import { fontRemap } from "../fontData";
var CryptoJS = require("crypto-js");

export class JJWXCLogic extends SiteLogic {
    processMetadata(index_html) {
        let metadata = null;

        try {
            let author = document.querySelector('span[itemprop="author"]').innerText;
            let title = document.querySelector('h1[itemprop="name"]').innerText;
            let id = document.querySelector('#clickNovelid').innerText;
            let genre = document.querySelector('span[itemprop="genre"]').innerText;
            let cover = document.querySelector('img[itemprop="image"]').getAttribute('src');

            this.css = "p {font-family: 'Microsoft YaHei', PingFangSC-Regular, HelveticaNeue-Light, 'Helvetica Neue Light', sans-serif !important;}";

            metadata = {
                id: id,
                title: title,
                author: author,
                genre: genre,
                images: [],
                contents: 'Table of Contents',
                language: 'zh'
            };
        } catch (err) {
            console.debug(err);
        } finally {
            return metadata;
        }
    }

    MD5process(input_str, offset) {
        console.debug("MD5input is", input_str);
        var warray = CryptoJS.enc.Utf8.parse(input_str);
        var hash = CryptoJS.MD5(warray);
        var hex = CryptoJS.enc.Hex.stringify(hash);
        console.debug(hex);

        var start = offset;
        var end = offset + 16;
        var utf8_iv = "";
        var utf8_key = "";

        var shifted = hex.slice(offset) + hex.slice(0, offset);
        utf8_iv = shifted.slice(0, 16);
        utf8_key = shifted.slice(-16);

        console.debug(utf8_iv, utf8_key);
        return { key: utf8_iv, iv: utf8_key };

    }

    DESDecode(input, cfg) {
        // console.debug("DES input is", input);
        // console.debug("DES cfg is", cfg);
        var key = CryptoJS.enc.Utf8.parse(cfg.key); //("9f952d5041805f3a");
        var iv = CryptoJS.enc.Utf8.parse(cfg.iv); //("7f15f12258e0e853");

        var decrypted = CryptoJS.DES.decrypt(input, key, { iv: iv });
        return CryptoJS.enc.Utf8.stringify(decrypted);
    }

    charCodeSum(input) {

        var acc = 0;
        for (let i = 0; i < input.length; i++) {
          acc += input.charCodeAt(i);
        }
        return acc;
      }
    

      async decryptChapter(page_html) {
        var novelid = page_html.querySelector('input[name=novelid').value;
        var chapterid = page_html.querySelector('input[name=chapterid').value;
        var cryptinfo = page_html.querySelector('input[name=cryptInfo').value;
        var accesskey = page_html.querySelector('input[name=accessKey').value;
        var content = page_html.querySelector('input[name=content').value;
        var cookie = await browser.cookies.get({ name: "JJEVER", url: "http://www.jjwxc.net/" });
        console.debug(cookie);

        // JJWXC has added an alternate key format - which VIP chapters it's used on depends on
        // whether the chapter number is odd or even, and if the novel id is odd or even.
        // Odd novel ids - the alternate format is used on even chapters
        // Even novel ids - the alternate format is used on odd chapters
        var chapter_int = parseInt(chapterid, 10);
        var novel_int = parseInt(novelid, 10);
        var useAlt = chapter_int % 2 != novel_int % 2;
        console.debug(chapter_int);

        let cookie_val = decodeURIComponent(cookie.value);
        let parsed_cookie = JSON.parse(cookie_val);
        var readerid = parsed_cookie.foreverreader;
        console.log(novelid, chapterid, cryptinfo, accesskey, readerid, useAlt);

        let ch_content = null;

        var rand = this.charCodeSum(accesskey);
        // The offset used to slice the first hash depends on whether we're using the alt format or not
        var offset1 = useAlt ? (rand - 16) % 33 : (rand + 16) % 32;
        // ...but it uses the same offset for the second hash either way.
        var offset2 = (rand + 16) % 32;

        var input1 = useAlt ? `${accesskey}-${novelid}-${chapterid}-${readerid}` : `${novelid}.${chapterid}.${readerid}.${accesskey}`;

        var params1, output1;
        try {
            params1 = this.MD5process(input1, offset1);
            output1 = JSON.parse(atob(this.DESDecode(cryptinfo, params1)));
            console.log(output1); // should look like { time: 1666289067, key: "RwUpuyA", ver: "20220527" };  
        } catch {
            // For some reason sometimes the calculation is off by 1, but only on chapters using the alt offset?
            console.error(`chapter ${chapterid} offset was off by 1!`);
            params1 = this.MD5process(input1, offset1 - 1);
            output1 = JSON.parse(atob(this.DESDecode(cryptinfo, params1)));
            console.log(output1); // should look like { time: 1666289067, key: "RwUpuyA", ver: "20220527" };  
        }

        var input2 = `${output1.key}${output1.time}${readerid}`;
        var params2 = this.MD5process(input2, offset2);
        var params2swap = { key: params2.iv, iv: params2.key };

        ch_content = this.DESDecode(content, params2swap);


        console.debug(ch_content);
        if (ch_content) {
            let ch_body = page_html.querySelector('.noveltext');
            ch_body.innerHTML = ch_content;
            return ch_body;
        } else {
            return null;
        }

    }

    getChapterlist(index_html) {
        let chapters = [];
        let rows = index_html.querySelectorAll('tr[itemprop="chapter"], tr[itemprop="chapter newestChapter"]');
        rows.forEach(row => {
            let info = row.querySelector('a[itemprop="url"]');
            if (info) {
                let ch_title = info.innerText;
                let url = info.getAttribute('href');
                if (!url) {
                    // Try the VIP link
                    url = info.getAttribute('rel');
                }
                url = url.replace("http://", "https://");
                let num = row.querySelector('td:nth-child(1)').innerText;
                let sum = row.querySelector('td:nth-child(3)').innerText;
                let ch = { title: ch_title, url: url, num: num, summary: sum };
                chapters.push({ title: ch_title, url: url, num: num, summary: sum });
            }
        });
        return chapters;
    }

    async getChapter(page_html) {
        let ch_text = [];
        let ch_body = page_html.querySelector('.novelbody div');
        let ch_note = page_html.querySelector('.readsmall');
        let encrypted_ch = page_html.querySelector('input[name=content]');
        let styles = page_html.styleSheets;
        let sourceStyle = null;
        let hasFont = false;
        let clean_note = "";

        if (encrypted_ch) {
            ch_body = await this.decryptChapter(page_html);
        }
        console.debug(ch_body);

        if (ch_body) {
            console.debug("got chapter body");
            ch_body.classList.forEach((token) => {
                if (token.startsWith("jjwxcfont_")) {
                    hasFont = `http://static.jjwxc.net/tmp/fonts/${token}.woff2?h=my.jjwxc.net`;
                }
            });

            const cssChecker = function(cssRule, cssClass) {
                // check if it's a style rule, and return early if not.
                if (cssRule.type != 1) {
                    return null;
                }
                let re = new RegExp(`${cssClass}::(before|after)`);
                let matches = cssRule.selectorText.match(re);
                if (matches) {
                    let order = matches[1];
                    let content = cssRule.style.content.replaceAll('"', '');
                    return {order, content};
                }
                return null;
            };

            let text_acc = "";
            ch_body.childNodes.forEach(function(node) {
                if (node.nodeName == "SPAN") {
                    // JJWXC does some absolute fuckery with inserting text
                    // via ::before and ::after pseudo-elements, so we need to reconstruct that.
                    let cssClass = node.className;
                    let text = node.innerText;
                    let check = null;
                    if (sourceStyle) {
                        for (let rule of sourceStyle.rules) {
                            check = cssChecker(rule, cssClass);
                            if (check) { break; }
                        }
                    } else {
                        // we don't know where the rules we need are, gotta iterate over all of them :\
                        for (let style of styles) {
                            // code is always in an inline style, so skipped the linked ones.
                            if (style.ownerNode && style.ownerNode.nodeName == "LINK") {continue;}
                            if (sourceStyle) { break; }
                            for (let rule of style.rules){
                                check = cssChecker(rule, cssClass);
                                if (check) {
                                    // all the strings will be in the same stylesheet, so next time we can skip full iteration
                                    sourceStyle = style;
                                    break;
                                }
                            }
                        }
                    }

                    if (check) {
                        let {order, content} = check;
                        text_acc = text_acc + (order == 'before' ? content + text : text + content);
                    } else {
                        text_acc = text_acc + text;
                    }
                }
                if (node.nodeType == 3) {
                    // plain text node, remove whitespace and add it
                    let content = node.textContent.trim();
                    if (content.length > 0) {
                        text_acc = text_acc + content;
                    }
                }
                if (node.nodeName == "BR" && text_acc.length > 0) {
                    // We've hit a linebreak, and we have some saved-up text
                    // Push the text to the array, and start accumulating more
                    ch_text.push(text_acc);
                    text_acc = '';
                }

            });

            if (ch_note) {
                let note = [];
                ch_note.childNodes.forEach(function (node) {
                    if (node.nodeType == 3) {
                        let content = node.textContent.trim();
                        if (content.length > 0) {
                            note.push(node.textContent);
                        }
                    } else if (node.nodeType == 1 && node.nodeName != 'input' && node.childNodes.length > 0) {
                        node.childNodes.forEach(function (node) {
                            if (node.nodeType == 3) {
                                let content = node.textContent.trim();
                                if (content.length > 0) {
                                    note.push(node.textContent);
                                }
                            }
                        });
                    }
                });
                clean_note = "<hr /><p>" + note.join('</p><p>') + "</p>";
            }

            console.debug(ch_text);

            if (hasFont) {
                console.debug("hasFont");
                let fontResp = await fetch(hasFont);
                let buff = await fontResp.arrayBuffer();
                return await fontRemap(buff, "<p>" + ch_text.join('</p><p>') + "</p>") + clean_note;

            } else {
                return "<p>" + ch_text.join('</p><p>') + "</p>" + clean_note;
            }
        } else {
            return null;
        }
    }

    async chapterXHR(chapter) {
        console.debug(chapter);
        let xhr = new XMLHttpRequest();
        xhr.overrideMimeType('text/html; charset=gb18030');
        xhr.open("GET", chapter.url, false);
        xhr.send(null);
        console.debug(xhr.responseText);
        const parser = new DOMParser();
        let chapter_frag = parser.parseFromString(xhr.responseText, "text/html");

        let ch_content = await this.getChapter(chapter_frag);
        if (ch_content) {
            // Do some cleanup. This
            // 1) removes zero-width nonjoiner and ideographic space (which trim() doesn't catch)
            // 2) removes JJWXC's insert text
            // 3) changes <hr> and <br> to be self-closing (required for XHTML)
            let cleaned = ch_content
                .replaceAll(/[\u200C\u3000]/g, '')
                .replaceAll('@无限好文，尽在晋江文学城', '')
                .replaceAll(/<(b|h)r>/gi, '<$1r/>');
            console.debug(cleaned);
            return this.buildChapter(chapter.title, chapter.num, chapter.summary, cleaned);
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
        let ch_title = `${number} - ${title}`;
        let ch_body = `<h1>${ch_title}</h1><p><i>${summary}</i></p><hr />${content}`
        return { title: ch_title, content: ch_body };
    }

    loadURL(url) {
        const regex = new RegExp(/.*jjwxc\.net\/onebook\.php\?novelid=\d+$/);
        return regex.test(url);
    }

}