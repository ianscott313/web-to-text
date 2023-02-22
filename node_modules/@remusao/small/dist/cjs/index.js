"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wmv = exports.webp = exports.webm = exports.wav = exports.txt = exports.svg = exports.png = exports.pdf = exports.mp4 = exports.mp3 = exports.json = exports.js = exports.jpg = exports.ico = exports.html = exports.gif = exports.flv = exports.getDataUrlForMime = exports.getResourceForMime = exports.hasResourceForMime = exports.getFallbackBlobResource = exports.getFallbackTextResource = void 0;
const flv_1 = __importDefault(require("./src/flv"));
exports.flv = flv_1.default;
const gif_1 = __importDefault(require("./src/gif"));
exports.gif = gif_1.default;
const html_1 = __importDefault(require("./src/html"));
exports.html = html_1.default;
const ico_1 = __importDefault(require("./src/ico"));
exports.ico = ico_1.default;
const jpeg_1 = __importDefault(require("./src/jpeg"));
exports.jpg = jpeg_1.default;
const javascript_1 = __importDefault(require("./src/javascript"));
exports.js = javascript_1.default;
const json_1 = __importDefault(require("./src/json"));
exports.json = json_1.default;
const mp3_1 = __importDefault(require("./src/mp3"));
exports.mp3 = mp3_1.default;
const mp4_1 = __importDefault(require("./src/mp4"));
exports.mp4 = mp4_1.default;
const pdf_1 = __importDefault(require("./src/pdf"));
exports.pdf = pdf_1.default;
const png_1 = __importDefault(require("./src/png"));
exports.png = png_1.default;
const svg_1 = __importDefault(require("./src/svg"));
exports.svg = svg_1.default;
const txt_1 = __importDefault(require("./src/txt"));
exports.txt = txt_1.default;
const wav_1 = __importDefault(require("./src/wav"));
exports.wav = wav_1.default;
const webm_1 = __importDefault(require("./src/webm"));
exports.webm = webm_1.default;
const webp_1 = __importDefault(require("./src/webp"));
exports.webp = webp_1.default;
const wmv_1 = __importDefault(require("./src/wmv"));
exports.wmv = wmv_1.default;
// List of mime types:
// - [ ] .aac 	AAC audio 	audio/aac
// - [ ] .abw 	AbiWord document 	application/x-abiword
// - [ ] .arc 	Archive document (multiple files embedded) 	application/x-freearc
// - [ ] .avi 	AVI: Audio Video Interleave 	video/x-msvideo
// - [ ] .azw 	Amazon Kindle eBook format 	application/vnd.amazon.ebook
// - [ ] .bin 	Any kind of binary data 	application/octet-stream
// - [ ] .bmp 	Windows OS/2 Bitmap Graphics 	image/bmp
// - [ ] .bz 	BZip archive 	application/x-bzip
// - [ ] .bz2 	BZip2 archive 	application/x-bzip2
// - [ ] .csh 	C-Shell script 	application/x-csh
// - [ ] .css 	Cascading Style Sheets (CSS) 	text/css
// - [ ] .csv 	Comma-separated values (CSV) 	text/csv
// - [ ] .doc 	Microsoft Word 	application/msword
// - [ ] .docx 	Microsoft Word (OpenXML) 	application/vnd.openxmlformats-officedocument.wordprocessingml.document
// - [ ] .eot 	MS Embedded OpenType fonts 	application/vnd.ms-fontobject
// - [ ] .epub 	Electronic publication (EPUB) 	application/epub+zip
// - [ ] .gz 	GZip Compressed Archive 	application/gzip
// - [x] .gif 	Graphics Interchange Format (GIF) 	image/gif
// - [x] .htm, .html 	HyperText Markup Language (HTML) 	text/html
// - [x] .ico 	Icon format 	image/vnd.microsoft.icon
// - [ ] .ics 	iCalendar format 	text/calendar
// - [ ] .jar 	Java Archive (JAR) 	application/java-archive
// - [x] .jpeg, .jpg 	JPEG images 	image/jpeg
// - [x] .js 	JavaScript 	text/javascript
// - [x] .json 	JSON format 	application/json
// - [ ] .jsonld 	JSON-LD format 	application/ld+json
// - [ ] .mid
// - [ ] .midi 	Musical Instrument Digital Interface (MIDI) 	audio/midi audio/x-midi
// - [ ] .mjs 	JavaScript module 	text/javascript
// - [x] .mp3 	MP3 audio 	audio/mpeg
// - [ ] .mpeg 	MPEG Video 	video/mpeg
// - [ ] .mpkg 	Apple Installer Package 	application/vnd.apple.installer+xml
// - [ ] .odp 	OpenDocument presentation document 	application/vnd.oasis.opendocument.presentation
// - [ ] .ods 	OpenDocument spreadsheet document 	application/vnd.oasis.opendocument.spreadsheet
// - [ ] .odt 	OpenDocument text document 	application/vnd.oasis.opendocument.text
// - [ ] .oga 	OGG audio 	audio/ogg
// - [ ] .ogv 	OGG video 	video/ogg
// - [ ] .ogx 	OGG 	application/ogg
// - [ ] .opus 	Opus audio 	audio/opus
// - [ ] .otf 	OpenType font 	font/otf
// - [x] .png 	Portable Network Graphics 	image/png
// - [x] .pdf 	Adobe Portable Document Format (PDF) 	application/pdf
// - [ ] .php 	Hypertext Preprocessor (Personal Home Page) 	application/php
// - [ ] .ppt 	Microsoft PowerPoint 	application/vnd.ms-powerpoint
// - [ ] .pptx 	Microsoft PowerPoint (OpenXML) 	application/vnd.openxmlformats-officedocument.presentationml.presentation
// - [ ] .rar 	RAR archive 	application/vnd.rar
// - [ ] .rtf 	Rich Text Format (RTF) 	application/rtf
// - [ ] .sh 	Bourne shell script 	application/x-sh
// - [x] .svg 	Scalable Vector Graphics (SVG) 	image/svg+xml
// - [ ] .swf 	Small web format (SWF) or Adobe Flash document 	application/x-shockwave-flash
// - [ ] .tar 	Tape Archive (TAR) 	application/x-tar
// - [ ] .tif
// - [ ] .tiff 	Tagged Image File Format (TIFF) 	image/tiff
// - [ ] .ts 	MPEG transport stream 	video/mp2t
// - [ ] .ttf 	TrueType Font 	font/ttf
// - [ ] .txt 	Text, (generally ASCII or ISO 8859-n) 	text/plain
// - [ ] .vsd 	Microsoft Visio 	application/vnd.visio
// - [x] .wav 	Waveform Audio Format 	audio/wav
// - [ ] .weba 	WEBM audio 	audio/webm
// - [x] .webm 	WEBM video 	video/webm
// - [x] .webp 	WEBP image 	image/webp
// - [ ] .woff 	Web Open Font Format (WOFF) 	font/woff
// - [ ] .woff2 	Web Open Font Format (WOFF) 	font/woff2
// - [ ] .xhtml 	XHTML 	application/xhtml+xml
// - [ ] .xls 	Microsoft Excel 	application/vnd.ms-excel
// - [ ] .xlsx 	Microsoft Excel (OpenXML) 	application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
// - [ ] .xml 	XML 	application/xml if not readable from casual users (RFC 3023, section 3)
// - [ ] text/xml if readable from casual users (RFC 3023, section 3)
// - [ ] .xul 	XUL 	application/vnd.mozilla.xul+xml
// - [ ] .zip 	ZIP archive 	application/zip
// - [ ] .3gp 	3GPP audio/video container 	video/3gpp, audio/3gpp if it doesn't contain video
// - [ ] .3g2 	3GPP2 audio/video container 	video/3gpp2, audio/3gpp2 if it doesn't contain video
// - [ ] .7z 	7-zip archive 	application/x-7z-compressed
const MIME_TO_RESOURCE = (() => {
    const resources = {};
    for (const fake of [
        flv_1.default,
        gif_1.default,
        html_1.default,
        ico_1.default,
        jpeg_1.default,
        javascript_1.default,
        json_1.default,
        mp3_1.default,
        mp4_1.default,
        pdf_1.default,
        png_1.default,
        svg_1.default,
        txt_1.default,
        wav_1.default,
        webm_1.default,
        webp_1.default,
        wmv_1.default,
    ]) {
        for (const alias of fake.aliases) {
            resources[alias] = fake;
        }
    }
    return resources;
})();
function getFallbackTextResource() {
    return txt_1.default;
}
exports.getFallbackTextResource = getFallbackTextResource;
function getFallbackBlobResource() {
    return {
        contentType: 'application/octet-stream;base64',
        aliases: ['application/octet-stream'],
        body: 'Cg==',
    };
}
exports.getFallbackBlobResource = getFallbackBlobResource;
function hasResourceForMime(mime) {
    return MIME_TO_RESOURCE[mime] !== undefined;
}
exports.hasResourceForMime = hasResourceForMime;
function getResourceForMime(mime) {
    return MIME_TO_RESOURCE[mime] || getFallbackTextResource();
}
exports.getResourceForMime = getResourceForMime;
function getDataUrlForMime(mime) {
    const { contentType, body } = getResourceForMime(mime);
    return `data:${contentType},${body}`;
}
exports.getDataUrlForMime = getDataUrlForMime;
//# sourceMappingURL=index.js.map