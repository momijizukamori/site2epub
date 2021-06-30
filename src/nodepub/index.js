const structuralFiles = require('./constituents/structural.js');
const markupFiles = require('./constituents/markup.js');
const path = require('path-browserify');

// Asynchronous forEach variant.
const forEachAsync = async (arr, cb) => {
  for (let index = 0; index < arr.length; index += 1) {
    // eslint-disable-next-line no-await-in-loop
    await cb(arr[index], index, arr);
  }
};

// Construct a new document.
const document = (metadata, generateContentsCallback) => {
  const self = this;
  self.CSS = '';
  self.sections = [];
  self.images = [];
  self.fonts = [];
  self.metadata = metadata;
  self.generateContentsCallback = generateContentsCallback;
  self.filesForTOC = [];
  self.coverImage = null;
  self.coverType = '';

  // Basic validation.
  const required = ['id', 'title', 'author', 'genre'];
  if (metadata == null) throw new Error('Missing metadata');
  required.forEach((field) => {
    const prop = metadata[field];
    if (prop == null || typeof (prop) === 'undefined' || prop.toString().trim() === '') throw new Error(`Missing metadata: ${field}`);
  });

  // Add a new section entry (usually a chapter) with the given title and
  // (HTML) body content. Optionally excludes it from the contents page.
  // If it is Front Matter then it will appear before the contents page.
  self.addSection = (title, content, excludeFromContents, isFrontMatter) => {
    self.sections.push({
      title,
      content,
      excludeFromContents: excludeFromContents || false,
      isFrontMatter: isFrontMatter || false,
    });
  };

  // Add a CSS file to the EPUB. This will be shared by all sections.
  self.addCSS = (content) => {
    self.CSS = content;
  };

  self.addCover = (coverData) => {
    self.coverImage = coverData;
  };

  self.addFonts = (data, filename) => {
    self.fonts.push({data: data, filename: filename});
  };

  // Gets the number of sections added so far.
  self.getSectionCount = () => self.sections.length;

  // Gets the files needed for the EPUB, as an array of objects.
  // Note that 'compress:false' MUST be respected for valid EPUB files.
  self.getFilesForEPUB = async () => {
    const syncFiles = [];
    const asyncFiles = [];

    // Required files.
    syncFiles.push({
      name: 'mimetype', folder: '', compress: false, content: structuralFiles.getMimetype(),
    });
    syncFiles.push({
      name: 'container.xml', folder: 'META-INF', compress: true, content: structuralFiles.getContainer(self),
    });
    syncFiles.push({
      name: 'ebook.opf', folder: 'OEBPF', compress: true, content: structuralFiles.getOPF(self),
    });
    syncFiles.push({
      name: 'navigation.ncx', folder: 'OEBPF', compress: true, content: structuralFiles.getNCX(self),
    });
    syncFiles.push({
      name: 'cover.xhtml', folder: 'OEBPF', compress: true, content: markupFiles.getCover(self),
    });

    // Optional files.
    syncFiles.push({
      name: 'ebook.css', folder: 'OEBPF/css', compress: true, content: markupFiles.getCSS(self),
    });
    for (let i = 1; i <= self.sections.length; i += 1) {
      syncFiles.push({
        name: `s${i}.xhtml`, folder: 'OEBPF/content', compress: true, content: markupFiles.getSection(self, i),
      });
    }

    // Table of contents markup.
    syncFiles.push({
      name: 'toc.xhtml', folder: 'OEBPF/content', compress: true, content: markupFiles.getTOC(self),
    });

    // Extra images - add filename into content property and prepare for async handling.
    if (self.coverImage) {
      const coverFilename = path.basename(self.coverImage.name);
      asyncFiles.push({
        name: coverFilename, folder: 'OEBPF/images', compress: true, content: self.coverImage.data,
      });
    }
    self.metadata.images.forEach((image) => {
      const imageFilename = path.basename(image);
      asyncFiles.push({
        name: imageFilename, folder: 'OEBPF/images', compress: true, content: image,
      });
    });

    self.fonts.forEach((font) => {
      asyncFiles.push({
        name: font.filename + '.woff2', folder: 'META-INF', compress: true, content: font.data,
      });
    });

    // Now async map to get the file contents.
    await forEachAsync(asyncFiles, async (file) => {
      const data = file.content;
      const loaded = {
        name: file.name, folder: file.folder, compress: file.compress, content: data,
      };
      syncFiles.push(loaded);
    });

    // Return with the files.
    return syncFiles;
  };

  return self;
};

exports.document = document;
