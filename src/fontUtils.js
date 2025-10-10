const Font = require('fonteditor-core').Font;
const woff2 = require('fonteditor-core').woff2;
const fontMaps = require('./fontData.js').fontMaps;

function compare_glyph(a, b) {
    return a.xMin === b.xMin && a.yMin === b.yMin && a.xMax === b.xMax && a.yMax === b.yMax && a.contours.length === b.contours;
}

function jjwxcRemap(text, mapping){
    let temp_text = null;
    mapping.forEach((value, key, _map) => {

        if (temp_text) {
            temp_text = temp_text.replaceAll(key, value);
        } else {
            temp_text = text.replaceAll(key, value);
        }

    });

    console.debug(temp_text);
    return temp_text;
}


function cgRemap(block, mapping) {
    let newStr = "";
    for (const c of block) {
        let newChar = mapping.get(c) || c;
        newStr += newChar;
    }
    return newStr;

}

const remappers = {'cg': cgRemap, 'jjxc': jjwxcRemap};

const fontMem = {};

export function fontRemap(fontbuff, text, site, memKey) {
    // console.debug(text);
    
    if (memKey && fontMem[memKey]) {
        return remappers[site](text, fontMem[memKey]);
    } else { 
        let fontarray = new Uint8Array(fontbuff);
        return woff2.init('addon/woff2.wasm').then(() => {
            console.debug("inited");
            let font = Font.create(fontarray, {
                type: 'woff2'
            });
            font.sort();
            let fontObject = font.get();
            let mappings = new Map();

            fontObject['glyf'].forEach((glyph) => {
                // console.debug(glyph);
                fontMaps[site].forEach((glyph2) => {
                    if (compare_glyph(glyph, glyph2)) {
                        mappings.set(String.fromCodePoint(glyph.unicode[0]),  glyph2.unicode);
                    }
                })
            });
            if (memKey) {
                fontMem[memKey] = mappings;
            }
            return remappers[site](text, mappings);
        });
    }
}
