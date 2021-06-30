/* eslint-disable no-plusplus */
const replacements = require('./replacements');
const path = require('path-browserify');

const structural = {

  // Provide the contents of the mimetype file (which should not be compressed).
  getMimetype: () => 'application/epub+zip',

  // Provide the contents of the container XML file.
  getContainer: (document) => {
    let result = '';
    result += "<?xml version='1.0' encoding='UTF-8' ?>[[EOL]]";
    result += "<container version='1.0' xmlns='urn:oasis:names:tc:opendocument:xmlns:container'>[[EOL]]";
    result += '  <rootfiles>[[EOL]]';
    result += "    <rootfile full-path='OEBPF/ebook.opf' media-type='application/oebps-package+xml'/>[[EOL]]";
    result += '  </rootfiles>[[EOL]]';
    result += '</container>';
    return replacements(document, replacements(document, result));
  },

  // Provide the contents of the OPF (spine) file.
  getOPF: (document) => {
    let i;
    let result = '';
    result += "<?xml version='1.0' encoding='utf-8'?>[[EOL]]";
    result += "<package xmlns='http://www.idpf.org/2007/opf' version='2.0' unique-identifier='BookId'>[[EOL]]";
    result += "  <metadata xmlns:dc='http://purl.org/dc/elements/1.1/' xmlns:opf='http://www.idpf.org/2007/opf'>[[EOL]]";

    if (document.metadata.series && document.metadata.sequence) {
      result += '    <dc:title>[[TITLE]] ([[SERIES]] #[[SEQUENCE]])</dc:title>[[EOL]]';
    } else if (document.metadata.series) {
      result += '    <dc:title>[[TITLE]] ([[SERIES]])</dc:title>[[EOL]]';
    } else if (document.metadata.sequence) {
      result += '    <dc:title>[[TITLE]] (#[[SEQUENCE]])</dc:title>[[EOL]]';
    } else {
      result += '    <dc:title>[[TITLE]]</dc:title>[[EOL]]';
    }

    result += "    <dc:identifier id='BookId' opf:scheme='URI'>[[ID]]</dc:identifier>[[EOL]]";
    result += '    <dc:language>[[LANGUAGE]]</dc:language>[[EOL]]';
    result += "    <dc:creator opf:role='aut' opf:file-as='[[FILEAS]]'>[[AUTHOR]]</dc:creator>[[EOL]]";
    result += '    <dc:publisher>[[PUBLISHER]]</dc:publisher>[[EOL]]';
    result += '    <dc:description>[[DESCRIPTION]]</dc:description>[[EOL]]';
    result += '    <dc:coverage></dc:coverage>[[EOL]]';
    result += '    <dc:source>[[SOURCE]]</dc:source>[[EOL]]';
    result += "    <dc:date opf:event='publication'>[[PUBLISHED]]</dc:date>[[EOL]]";
    result += "    <dc:date opf:event='modification'>[[MODIFIED]]</dc:date>[[EOL]]";
    result += '    <dc:rights>[[COPYRIGHT]]</dc:rights>[[EOL]]';
    result += '    <dc:subject>[[GENRE]]</dc:subject>[[EOL]]';

    if (document.metadata.tags) {
      const tags = document.metadata.tags.split(',');
      for (i = 0; i < tags.length; i += 1) {
        result += `    <dc:subject>${tags[i]}</dc:subject>[[EOL]]`;
      }
    }

    if (document.metadata.series && document.metadata.sequence) {
      result += "    <meta name='calibre:series' content='[[SERIES]]'/>[[EOL]]";
      result += "    <meta name='calibre:series_index' content='[[SEQUENCE]]'/>[[EOL]]";
    }

    result += "    <meta name='cover' content='cover-image'/>[[EOL]]";
    result += '  </metadata>[[EOL]]';
    result += '  <manifest>[[EOL]]';
    if (document.coverImage) {
      const coverFilename = path.basename(document.coverImage);
      const coverExt = path.extname(coverFilename).replace('.', '');
      result += `    <item id='cover-image' media-type='image/${coverExt}' href='images/${coverFilename}'/>[[EOL]]`;
      result += "    <item id='cover' media-type='application/xhtml+xml' href='cover.xhtml'/>[[EOL]]";
  }
    result += "    <item id='navigation' media-type='application/x-dtbncx+xml' href='navigation.ncx'/>[[EOL]]";

    for (i = 1; i <= document.sections.length; i += 1) {
      result += `    <item id='s${i}' media-type='application/xhtml+xml' href='content/s${i}.xhtml'/>[[EOL]]`;
    }

    result += "    <item id='toc' media-type='application/xhtml+xml' href='content/toc.xhtml'/>[[EOL]]";
    result += "    <item id='css' media-type='text/css' href='css/ebook.css'/>[[EOL]]";

    for (i = 0; i < document.metadata.images.length; i += 1) {
      const image = document.metadata.images[i];
      const imageExt = path.extname(image).toLowerCase();
      const imageFile = path.basename(image);
      let imageType = '';
      imageType = (imageExt === '.svg') ? 'image/svg+xml' : imageType;
      imageType = (imageExt === '.png') ? 'image/png' : imageType;
      imageType = (imageExt === '.jpg' || imageExt === '.jpeg') ? 'image/jpeg' : imageType;
      imageType = (imageExt === '.gif') ? 'image/gif' : imageType;
      imageType = (imageExt === '.tif' || imageExt === '.tiff') ? 'image/tiff' : imageType;
      if (imageType.length > 0) {
        result += `    <item id='img${i}' media-type='${imageType}' href='images/${imageFile}'/>[[EOL]]`;
      }
    }

    document.fonts.forEach(font => {
      result += `    <item id='${font.filename}' media-type='font/woff2' href='../META-INF/${font.filename}.woff2'/>[[EOL]]`;
    })

    result += '  </manifest>[[EOL]]';

    result += "  <spine toc='navigation'>[[EOL]]";
    result += "    <itemref idref='cover' linear='yes' />[[EOL]]";

    for (i = 1; i <= document.sections.length; i += 1) {
      if (document.sections[i - 1].isFrontMatter) {
        result += `    <itemref idref='s${i}' />[[EOL]]`;
      }
    }

    result += "    <itemref idref='toc'/>[[EOL]]";

    for (i = 1; i <= document.sections.length; i += 1) {
      if (!(document.sections[i - 1].isFrontMatter)) {
        result += `    <itemref idref='s${i}' />[[EOL]]`;
      }
    }

    result += '  </spine>[[EOL]]';
    result += '  <guide>[[EOL]]';
    result += "    <reference type='toc' title='Contents' href='content/toc.xhtml'></reference>[[EOL]]";
    result += '  </guide>[[EOL]]';
    result += '</package>[[EOL]]';

    return replacements(document, replacements(document, result));
  },

  // Provide the contents of the NCX file.
  getNCX: (document) => {
    let i; let title; let
      order;
    let result = '';
    let playOrder = 1;
    result += "<?xml version='1.0' encoding='UTF-8'?>[[EOL]]";
    result += "<!DOCTYPE ncx PUBLIC '-//NISO//DTD ncx 2005-1//EN' 'http://www.daisy.org/z3986/2005/ncx-2005-1.dtd'>[[EOL]]";
    result += "<ncx xmlns='http://www.daisy.org/z3986/2005/ncx/'>[[EOL]]";
    result += '<head>[[EOL]]';
    result += "  <meta name='dtb:uid' content='[[ID]]'/>[[EOL]]";
    result += "  <meta name='dtb:depth' content='1'/>[[EOL]]";
    result += "  <meta name='dtb:totalPageCount' content='0'/>[[EOL]]";
    result += "  <meta name='dtb:maxPageNumber' content='0'/>[[EOL]]";
    result += '</head>[[EOL]]';
    result += '<docTitle><text>[[TITLE]]</text></docTitle>[[EOL]]';
    result += '<docAuthor><text>[[AUTHOR]]</text></docAuthor>[[EOL]]';
    result += '<navMap>[[EOL]]';
    result += `  <navPoint id='cover' playOrder='${playOrder++}'>[[EOL]]`;
    result += '    <navLabel><text>Cover</text></navLabel>[[EOL]]';
    result += "    <content src='cover.xhtml'/>[[EOL]]";
    result += '  </navPoint>[[EOL]]';

    for (i = 1; i <= document.sections.length; i += 1) {
      if (!(document.sections[i - 1].excludeFromContents)) {
        if (document.sections[i - 1].isFrontMatter) {
          title = document.sections[i - 1].title;
          order = playOrder++;
          document.filesForTOC.push({ title, link: `s${i}.xhtml`, itemType: 'front' });
          result += `  <navPoint class='section' id='s${i}' playOrder='${order}'>[[EOL]]`;
          result += `    <navLabel><text>${title}</text></navLabel>[[EOL]]`;
          result += `    <content src='content/s${i}.xhtml'/>[[EOL]]`;
          result += '  </navPoint>[[EOL]]';
        }
      }
    }

    document.filesForTOC.push({ title: document.metadata.contents, link: 'toc.xhtml', itemType: 'contents' });
    result += `  <navPoint class='toc' id='toc' playOrder='${playOrder++}'>[[EOL]]`;
    result += '    <navLabel><text>[[CONTENTS]]</text></navLabel>[[EOL]]';
    result += "    <content src='content/toc.xhtml'/>[[EOL]]";
    result += '  </navPoint>[[EOL]]';

    for (i = 1; i <= document.sections.length; i += 1) {
      if (!(document.sections[i - 1].excludeFromContents)) {
        if (!document.sections[i - 1].isFrontMatter) {
          title = document.sections[i - 1].title;
          order = playOrder++;
          document.filesForTOC.push({ title, link: `s${i}.xhtml`, itemType: 'main' });
          result += `  <navPoint class='section' id='s${i}' playOrder='${order}'>[[EOL]]`;
          result += `    <navLabel><text>${title}</text></navLabel>[[EOL]]`;
          result += `    <content src='content/s${i}.xhtml'/>[[EOL]]`;
          result += '  </navPoint>[[EOL]]';
        }
      }
    }

    result += '</navMap>[[EOL]]';
    result += '</ncx>[[EOL]]';

    return replacements(document, replacements(document, result));
  },

};

module.exports = structural;
