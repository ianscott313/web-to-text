"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const index_1 = require("./index");
describe('@remusao/smaz', () => {
    [
        '',
        'This is a small string',
        'foobar',
        'the end',
        'not-a-g00d-Exampl333',
        'Smaz is a simple compression library',
        'Nothing is more difficult, and therefore more precious, than to be able to decide',
        'this is an example of what works very well with smaz',
        '1000 numbers 2000 will 10 20 30 compress very little',
        'Nel mezzo del cammin di nostra vita, mi ritrovai in una selva oscura',
        'Mi illumino di immenso',
        "L'autore di questa libreria vive in Sicilia",
        'http://google.com',
        'http://programming.reddit.com',
        'http://github.com/antirez/smaz/tree/master',
    ].forEach(str => {
        it(str, () => {
            const compressed = index_1.compress(str);
            chai_1.expect(compressed).to.have.length(index_1.getCompressedSize(str));
            chai_1.expect(index_1.decompress(compressed)).to.equal(str);
        });
    });
});
//# sourceMappingURL=index.test.js.map