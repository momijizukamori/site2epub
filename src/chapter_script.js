// Put all the javascript code here, that you want to execute after page load.
var browser = require("webextension-polyfill");
var MESSAGE_TYPE = require('./message_type');
//import {SiteLogic} from './sites/generic';

const MessageType = MESSAGE_TYPE.MessageType;

class TabScript {
    constructor() {
        this.logic = new SiteLogic();
    }
    setup() {
        browser.runtime.onMessage.addListener( (message, sender) => {this.messageHandler(sender, message)});
    }

    messageHandler(sender, message) {
        console.log("got message");
        switch (message.type) {
            case MessageType.GET_CHAPTER:
                let chapter = this.logic.chapterTab(message.content.id);

                setTimeout(() => {
                    let chapter = this.logic.chapterTab(message.content.id);
                    this.messageDispatcher({id: message.content.id.num, chapter: chapter}, MessageType.GET_CHAPTER);
                }, 5000);
        }
    }

    messageDispatcher(message, type){
        console.log("dispatching message");
        browser.runtime.sendMessage({
            type: type,
            content: message
        });
    }

}

const tabScript = new TabScript();
tabScript.setup();
