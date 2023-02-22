"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const index_1 = require("./index");
describe('@remusao/smaz-compress', () => {
    it('compresses empty string', () => {
        const smaz = new index_1.SmazCompress([]);
        chai_1.expect(smaz.compress('')).to.be.empty;
        chai_1.expect(smaz.getCompressedSize('')).to.eql(0);
    });
    it('compresses string not from codebook', () => {
        const smaz = new index_1.SmazCompress(['foo']);
        chai_1.expect(smaz.getCompressedSize('bar')).to.equal(5);
        chai_1.expect(smaz.compress('bar')).to.deep.equal(new Uint8Array([
            255,
            3,
            'b'.charCodeAt(0),
            'a'.charCodeAt(0),
            'r'.charCodeAt(0),
        ]));
    });
    it('compresses string from codebook', () => {
        const smaz = new index_1.SmazCompress(['foo']);
        chai_1.expect(smaz.getCompressedSize('foo')).to.be.equal(1);
        chai_1.expect(smaz.compress('foo')).to.deep.equal(new Uint8Array([0]));
    });
    it('compresses with a mix', () => {
        const smaz = new index_1.SmazCompress(['foo']);
        chai_1.expect(smaz.getCompressedSize('barfoob')).to.be.equal(8);
        chai_1.expect(smaz.compress('barfoob')).to.deep.equal(new Uint8Array([
            255,
            3,
            'b'.charCodeAt(0),
            'a'.charCodeAt(0),
            'r'.charCodeAt(0),
            0,
            254,
            'b'.charCodeAt(0),
        ]));
        chai_1.expect(smaz.getCompressedSize('bfoobar')).to.eql(8);
        chai_1.expect(smaz.compress('bfoobar')).to.deep.equal(new Uint8Array([
            254,
            'b'.charCodeAt(0),
            0,
            255,
            3,
            'b'.charCodeAt(0),
            'a'.charCodeAt(0),
            'r'.charCodeAt(0),
        ]));
    });
    it('handles ambiguous codebook', () => {
        const smaz = new index_1.SmazCompress([
            'f',
            'fo',
            'foo',
            'foob',
            'fooba',
            'foobar',
            'foobarb',
            'foobarba',
            'foobarbaz',
        ]);
        const checkCompress = (str, size) => {
            const compressed = smaz.compress(str);
            chai_1.expect(compressed).to.have.length(size);
            chai_1.expect(smaz.getCompressedSize(str)).to.eql(size);
        };
        checkCompress('f', 1);
        checkCompress('fo', 1);
        checkCompress('foo', 1);
        checkCompress('foob', 1);
        checkCompress('fooba', 1);
        checkCompress('foobar', 1);
        checkCompress('foobarb', 1);
        checkCompress('foobarba', 1);
        checkCompress('foobarbaz', 1);
        checkCompress('foobarbazf', 2);
        checkCompress('foobarbazfo', 2);
        // TODO - add @remusao/smaz-decompress as dev dependency to test.
    });
    it('fills verbatim buffer', () => {
        const smaz = new index_1.SmazCompress(['foo']);
        let str = '';
        for (let i = 0; i <= 256; i += 1) {
            str += 'b';
        }
        const compressed = smaz.compress(str);
        chai_1.expect(compressed.length).to.be.eql(smaz.getCompressedSize(str));
    });
});
//# sourceMappingURL=index.test.js.map