import {SiteLogic} from "./generic";

export class ChangpeiLogic extends SiteLogic  {
    processMetadata(index_html) {
        let author = document.querySelector('.author-name').innerText;
        let title = document.querySelector('h3.name').innerText;
        let id = document.querySelector('span.id').innerText;
        let genre = document.querySelectorAll('.tag-item')[1].innerText;
        let cover = document.querySelector('.cover img').getAttribute('src');

        return {
            id: id,
            title: title,
            author: author,
            genre: genre,
            cover: "dummy.jpg",
            images: [],
            contents: 'Table of Contents',
            language: 'zh'
        };
    }

    getChapterlist(index_html) {
        let chapters = [];
        let rows = index_html.querySelectorAll('.chapter');
        rows.forEach(row => {
            let num = row.querySelector('.order').innerText;
            let info = row.querySelector('a.name');
            let ch_title = info.innerText;
            let url = "https://www.gongzicp.com" + info.getAttribute('href');
            chapters.push({title: ch_title, url: url, num: num, summary: ''});
        });
        return chapters;
    }

    getChapter(page_html) {
        let ch_text = [];
        let ch_body = page_html.querySelectorAll('.content p');
        if (ch_body) {
            ch_body.forEach(function (node) {
                if (!node.getAttribute('class')) {
                    let content = node.textContent.trim();
                    if (content.length > 0) {
                        ch_text.push(node.textContent);
                    }
                }
            });
            return "<p>" + ch_text.join('</p><p>') + "</p>";
        } else {
            return null;
        }
    }

    buildChapter(title, number, summary, content) {
        let ch_title = `${number} - ${title}`;
        let ch_body = `<h1>${ch_title}</h1>${content}`;
        return {title: ch_title, content: ch_body}
    }

    canXHR() {
        return false;
    }


    chapterTab(chapter, data) {
        console.debug("trying to get chapter data");
        let ch_content = this.getChapter(document.body);
        if (ch_content) {
            return this.buildChapter(chapter.title, chapter.num, chapter.summary, ch_content);
        } else {
            return null;
        }
    }

    loadURL(url) {
        return url.includes("gongzicp.com");
    }
}
