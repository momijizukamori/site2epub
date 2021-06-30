export class SiteLogic {
    constructor() {
        this.css = "";
    }
    processMetadata(index_html) {
        // Take a novel index page and build basic epub metadata out of it
        var metadata = {
            id: '278-123456789',
            title: 'My Title',
            series: 'My Series',
            sequence: 1,
            author: 'My Author',
            fileAs: 'Cartlidge,KA',
            genre: 'Non-Fiction',
            tags: 'Sample,Example,Test',
            copyright: 'Anonymous, 1980',
            publisher: 'My Fake Publisher',
            published: '2000-12-31',
            language: 'en',
            description: 'A test book.',
            contents: 'Table of Contents',
            source: 'http://www.kcartlidge.com',
        };
        return metadata;
    }

    getChapterlist(index_html) {
        // Take a novel index and return a list of objects representing a chapter
        // These should be in the form {title: chapter title, url: chapter url, num: chapter number, summary: summary}
        var chapters = [{title: "chapter title", url: "http://example.com", num: 1, summary: null}];
        return chapters
    }

    getChapter(page_html) {
        // Take page html and return the cleaned chapter content for it.
        return '<p>some text</p>'
    }

    buildChapter(title, number, summary, content) {
        // Take chapter data components and return formatted chapter title and content
        return {title: title, content: content}
    }

    buildTitle(title, number){
        // build a string for chapter title out of the string and number
        return `${number} - ${title}`;
    }

    canXHR() {
        // return true if chapters can be fetched via XHR, or false if they must be fully loaded in a tab
        // XHR is faster, so prefer that when you can
        return true;
    }

    chapterXHR(chapter) {
        // Take chapter data and return finished chapter, or null if chapter could not be fetched.
        // This should use synchronous XHR
        return null;
    }

    chapterTab(chapter, data) {
        // Take document and return cleaned content, or null if not fetchable
        // This will be run in an injected script
        return window.location.href;
    }

    getCSS() {
        return this.css
    }

    loadURL(url) {
        // return true if the page action should become active, false if not.
        return true;
    }
}
