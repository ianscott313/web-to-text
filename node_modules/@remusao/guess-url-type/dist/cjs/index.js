"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const documents_1 = require("./src/extensions/documents");
const fonts_1 = require("./src/extensions/fonts");
const images_1 = require("./src/extensions/images");
const medias_1 = require("./src/extensions/medias");
const scripts_1 = require("./src/extensions/scripts");
const stylesheets_1 = require("./src/extensions/stylesheets");
const extname_1 = require("./src/extname");
function getRequestType(url) {
    const ext = extname_1.extname(url);
    // Images
    if (images_1.EXTENSIONS.has(ext) ||
        url.startsWith('data:image/') ||
        url.startsWith('https://frog.wix.com/bt')) {
        return 'image';
    }
    // Medias
    if (medias_1.EXTENSIONS.has(ext) ||
        url.startsWith('data:audio/') ||
        url.startsWith('data:video/')) {
        return 'media';
    }
    // Stylesheets
    if (stylesheets_1.EXTENSIONS.has(ext) || url.startsWith('data:text/css')) {
        return 'stylesheet';
    }
    // Scripts
    if (scripts_1.EXTENSIONS.has(ext) ||
        (url.startsWith('data:') &&
            (url.startsWith('data:application/ecmascript') ||
                url.startsWith('data:application/javascript') ||
                url.startsWith('data:application/x-ecmascript') ||
                url.startsWith('data:application/x-javascript') ||
                url.startsWith('data:text/ecmascript') ||
                url.startsWith('data:text/javascript') ||
                url.startsWith('data:text/javascript1.0') ||
                url.startsWith('data:text/javascript1.1') ||
                url.startsWith('data:text/javascript1.2') ||
                url.startsWith('data:text/javascript1.3') ||
                url.startsWith('data:text/javascript1.4') ||
                url.startsWith('data:text/javascript1.5') ||
                url.startsWith('data:text/jscript') ||
                url.startsWith('data:text/livescript') ||
                url.startsWith('data:text/x-ecmascript') ||
                url.startsWith('data:text/x-javascript'))) ||
        url.startsWith('https://maps.googleapis.com/maps/api/js') ||
        url.startsWith('https://www.googletagmanager.com/gtag/js')) {
        return 'script';
    }
    // Documents
    if (documents_1.EXTENSIONS.has(ext) ||
        url.startsWith('data:text/html') ||
        url.startsWith('data:application/xhtml') ||
        url.startsWith('https://www.youtube.com/embed/') ||
        url.startsWith('https://www.google.com/gen_204')) {
        return 'document';
    }
    // Fonts
    if (fonts_1.EXTENSIONS.has(ext) || url.startsWith('data:font/')) {
        return 'font';
    }
    return 'other';
}
exports.default = getRequestType;
//# sourceMappingURL=index.js.map