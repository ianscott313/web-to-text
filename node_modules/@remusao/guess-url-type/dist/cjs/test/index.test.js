"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const documents_1 = require("../src/extensions/documents");
const fonts_1 = require("../src/extensions/fonts");
const images_1 = require("../src/extensions/images");
const medias_1 = require("../src/extensions/medias");
const scripts_1 = require("../src/extensions/scripts");
const stylesheets_1 = require("../src/extensions/stylesheets");
const extname_1 = require("../src/extname");
const index_1 = __importDefault(require("../index"));
describe('@remusao/guess-url-type', () => {
    describe('#extname', () => {
        it('returns empty string if no extension', () => {
            chai_1.expect(extname_1.extname('https://example.com/foo')).to.equal('');
        });
        it('returns simple extension', () => {
            chai_1.expect(extname_1.extname('https://example.com/foo.js')).to.equal('js');
        });
        it('ignores fragment', () => {
            chai_1.expect(extname_1.extname('https://example.com/foo.js#fragment')).to.equal('js');
        });
        it('ignores query', () => {
            chai_1.expect(extname_1.extname('https://example.com/foo.js?query')).to.equal('js');
        });
        it('ignores query and fragment', () => {
            chai_1.expect(extname_1.extname('https://example.com/foo.js?query#fragment')).to.equal('js');
        });
        it('ignores too long extension', () => {
            chai_1.expect(extname_1.extname('https://example.com/foo.aaaaaaaaaaa')).to.equal('');
        });
    });
    for (const [type, extensions] of [
        ['document', documents_1.EXTENSIONS],
        ['font', fonts_1.EXTENSIONS],
        ['image', images_1.EXTENSIONS],
        ['media', medias_1.EXTENSIONS],
        ['script', scripts_1.EXTENSIONS],
        ['stylesheet', stylesheets_1.EXTENSIONS],
    ]) {
        describe(`detects ${type} based on extension`, () => {
            for (const ext of extensions) {
                it(`${ext}`, () => {
                    chai_1.expect(index_1.default(`https://example.com/file.${ext}`)).to.equal(type);
                    chai_1.expect(index_1.default(`https://example.com/file.${ext}?query=42`)).to.equal(type);
                    chai_1.expect(index_1.default(`https://example.com/file.${ext}?query=42#fragment`)).to.equal(type);
                });
            }
        });
    }
    describe('falls-back to other', () => {
        it('when extension is unknown', () => {
            chai_1.expect(index_1.default('https://example.com/file.unknown')).to.equal('other');
        });
        it('when there is no extension', () => {
            chai_1.expect(index_1.default('https://example.com/file')).to.equal('other');
        });
    });
    describe('data:', () => {
        for (const [type, mime] of [
            ['document', 'application/xhtml'],
            ['document', 'application/xhtml+xml'],
            ['document', 'text/html'],
            ['font', 'font/woff'],
            ['image', 'image/png'],
            ['media', 'audio/mpeg'],
            ['media', 'audio/vorbis'],
            ['media', 'video/mp4'],
            ['other', 'application/octet-stream'],
            ['other', 'application/pdf'],
            ['other', 'model/vml'],
            ['other', 'text/plain'],
            ['script', 'application/ecmascript'],
            ['script', 'application/javascript'],
            ['script', 'application/x-ecmascript'],
            ['script', 'application/x-javascript'],
            ['script', 'text/ecmascript'],
            ['script', 'text/javascript'],
            ['script', 'text/javascript1.0'],
            ['script', 'text/javascript1.1'],
            ['script', 'text/javascript1.2'],
            ['script', 'text/javascript1.3'],
            ['script', 'text/javascript1.4'],
            ['script', 'text/javascript1.5'],
            ['script', 'text/jscript'],
            ['script', 'text/livescript'],
            ['script', 'text/x-ecmascript'],
            ['script', 'text/x-javascript'],
            ['stylesheet', 'text/css'],
        ]) {
            it(`detect ${type} for MIME ${mime}`, () => {
                chai_1.expect(index_1.default(`data:${mime},foo`)).to.equal(type);
                chai_1.expect(index_1.default(`data:${mime};base64,foo`)).to.equal(type);
            });
        }
    });
});
//# sourceMappingURL=index.test.js.map