import {SiteLogic} from './generic';

export class WattpadLogic extends SiteLogic {
    processMetadata(index_html) {
        let metadata = null;

        try {
            let author = document.querySelector('div.author-info:nth-child(1) > div:nth-child(2) > a').innerText;
            let title = document.querySelector('.story-info__title').innerText;
            let id = document.querySelector('link [rel="canonical"]').getAttribute('href').replace(/https:\/\/www\.wattpad\.com\/story\/(\d+).*/, '$1');
            let genre = "Wattpad";
            let cover = document.querySelector('.story-cover > img').getAttribute('src');

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
            console.log(err);
        } finally {
            return metadata;
        }
    }

    getChapterlist(index_html) {
        let chapters = [];
        let rows = index_html.querySelector('.story-parts').querySelector('ul:nth-child(1) li a');
        rows.forEach((row, i) => {
            let ch_title = row.innerText;
            let url = row.getAttribute('href');
            chapters.push({title: ch_title, url: url, num: i, summary: null});

        });
        return chapters
    }

    async getChapter(page_html, url) {
        let pages = parseInt(page_html.innerHTML.replace(/"pages":(\d*),/i, '$1'));
        let promises = [];

        for (let i = 1; i <= pages + 1; i++) {
            let url = `${url}/page/${i}`;
            let req = fetch(url).then(res => {
                return res.text().then(data => {
                    const parser = new DOMParser();
                    let page_frag = parser.parseFromString(data, "text/html");
                    return page_frag.querySelector('pre').innerHTML;
                })
            });
            promises.push(req);
        }

        let text = (await Promise.all(promises)).join();

        text = text.replaceAll(/<\/?pre>/, '');
        text = text.replaceAll(/\xa0/, '');
        text = text.replaceAll(/<p data-p-id=".{32}">/, '<p>');

        return text;
    }

    async chapterXHR(chapter) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", chapter.url, false);
        xhr.send(null);
        const parser = new DOMParser();
        let chapter_frag = parser.parseFromString(xhr.responseText, "text/html");

        let ch_content = await this.getChapter(chapter_frag, url);
        if (ch_content) {
            return this.buildChapter(chapter.title, chapter.num, chapter.summary, ch_content);
        } else {
            return null;
        }

    }


    buildChapter(title, number, summary, content) {
        let ch_title = `${number} - ${title}`;
        let ch_body = `<h1>${ch_title}</h1>${content}`;
        return {title: ch_title, content: ch_body}
    }

    loadURL(url) {
        const regex = new RegExp(/.*wattpad\.com\/story\/.*$/);
        return regex.test(url);
    }

}
