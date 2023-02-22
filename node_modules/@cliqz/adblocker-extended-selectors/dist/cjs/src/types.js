"use strict";
/*!
 * Copyright (c) 2017-present Cliqz GmbH. All rights reserved.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAST = exports.isAtoms = void 0;
const tokenTypes = [
    'attribute',
    'id',
    'class',
    'comma',
    'combinator',
    'pseudo-element',
    'pseudo-class',
    'type',
];
function isAtoms(tokens) {
    return tokens.every((token) => typeof token !== 'string');
}
exports.isAtoms = isAtoms;
function isAST(tokens) {
    return tokens.every((token) => token.type !== 'comma' && token.type !== 'combinator');
}
exports.isAST = isAST;
//# sourceMappingURL=types.js.map