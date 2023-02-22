"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const index_1 = require("./index");
describe('@remusao/smaz-compress', () => {
    it('decompresses empty array', () => {
        const smaz = new index_1.SmazDecompress(['foo']);
        chai_1.expect(smaz.decompress(new Uint8Array(0))).to.equal('');
    });
    it('decompresses string from codebook', () => {
        const smaz = new index_1.SmazDecompress(['foo']);
        chai_1.expect(smaz.decompress(new Uint8Array([0]))).to.equal('foo');
    });
    it('decompresses verbatim character', () => {
        const smaz = new index_1.SmazDecompress(['foo']);
        chai_1.expect(smaz.decompress(new Uint8Array([254, 'b'.charCodeAt(0)]))).to.equal('b');
    });
    it('decompresses verbatim string', () => {
        const smaz = new index_1.SmazDecompress(['foo']);
        chai_1.expect(smaz.decompress(new Uint8Array([
            255,
            3,
            'b'.charCodeAt(0),
            'a'.charCodeAt(0),
            'r'.charCodeAt(0),
        ]))).to.equal('bar');
    });
    it('decompresses a mix', () => {
        const smaz = new index_1.SmazDecompress(['foo', 'baz']);
        chai_1.expect(smaz.decompress(new Uint8Array([
            254,
            'b'.charCodeAt(0),
            0,
            1,
            255,
            3,
            'b'.charCodeAt(0),
            'a'.charCodeAt(0),
            'r'.charCodeAt(0),
        ]))).to.equal('bfoobazbar');
    });
});
//# sourceMappingURL=index.test.js.map