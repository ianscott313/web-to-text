"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const index_1 = require("./index");
describe('@remusao/trie', () => {
    describe('#create', () => {
        it('empty trie', () => {
            const trie = index_1.create([]);
            chai_1.expect(trie.code).to.be.undefined;
            chai_1.expect(trie.chars).to.have.length(0);
            chai_1.expect(index_1.lookup(trie, '')).to.be.false;
            chai_1.expect(index_1.lookup(trie, 'foo')).to.be.false;
        });
        it('trie with one string', () => {
            const trie = index_1.create(['aaaa']);
            chai_1.expect(index_1.lookup(trie, '')).to.be.false;
            chai_1.expect(index_1.lookup(trie, 'a')).to.be.false;
            chai_1.expect(index_1.lookup(trie, 'aa')).to.be.false;
            chai_1.expect(index_1.lookup(trie, 'aaa')).to.be.false;
            chai_1.expect(index_1.lookup(trie, 'aaaa')).to.be.true;
            chai_1.expect(index_1.lookup(trie, 'aaaaa')).to.be.false;
        });
        it('trie with two strings', () => {
            const trie = index_1.create(['aaaa', 'aaab']);
            chai_1.expect(index_1.lookup(trie, '')).to.be.false;
            chai_1.expect(index_1.lookup(trie, 'a')).to.be.false;
            chai_1.expect(index_1.lookup(trie, 'aa')).to.be.false;
            chai_1.expect(index_1.lookup(trie, 'aaa')).to.be.false;
            chai_1.expect(index_1.lookup(trie, 'aaaa')).to.be.true;
            chai_1.expect(index_1.lookup(trie, 'aaab')).to.be.true;
            chai_1.expect(index_1.lookup(trie, 'aaaaa')).to.be.false;
        });
    });
});
//# sourceMappingURL=index.test.js.map