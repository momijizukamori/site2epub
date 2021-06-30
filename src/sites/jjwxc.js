import {SiteLogic} from './generic';
import {fontRemap} from "../fontData";

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
            console.log(err);
        } finally {
            return metadata;
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
                let num = row.querySelector('td:nth-child(1)').innerText;
                let sum = row.querySelector('td:nth-child(3)').innerText;
                let ch = {title: ch_title, url: url, num: num, summary: sum};
                chapters.push({title: ch_title, url: url, num: num, summary: sum});
            }
        });
        return chapters
    }

    async getChapter(page_html) {
        let ch_text = [];
        let ch_body = page_html.querySelector('.noveltext');
        let hasFont = false;

        if (ch_body) {
            ch_body.classList.forEach((token) => {
                if (token.startsWith("jjwxcfont_")) {
                    hasFont = `http://static.jjwxc.net/tmp/fonts/${token}.woff2?h=my.jjwxc.net`;
                }
            });

            ch_body.childNodes.forEach(function (node) {
                if (node.nodeType == 3) {
                    let content = node.textContent.trim();
                    if (content.length > 0) {
                        ch_text.push(node.textContent);
                    }
                }
            });

            if (hasFont) {
                let fontResp = await fetch(hasFont);
                let buff = await fontResp.arrayBuffer();
                return await fontRemap(buff, "<p>" + ch_text.join('</p><p>') + "</p>");

             } else {
                    return "<p>" + ch_text.join('</p><p>') + "</p>";
            }
        } else {
                return null;
        }
    }

    async chapterXHR(chapter) {
        let xhr = new XMLHttpRequest();
        xhr.overrideMimeType('text/html; charset=gb18030');
        xhr.open("GET", chapter.url, false);
        xhr.send(null);
        const parser = new DOMParser();
        let chapter_frag = parser.parseFromString(xhr.responseText, "text/html");

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
        let ch_title = `${number} - ${title}`;
        let ch_body = `<h1>${ch_title}</h1><p><i>${summary}</i></p><hr />${content}`
        return {title: ch_title, content: ch_body}
    }

    loadURL(url) {
        const regex = new RegExp(/.*jjwxc\.net\/onebook\.php\?novelid=\d+$/);
        return regex.test(url);
    }

}
