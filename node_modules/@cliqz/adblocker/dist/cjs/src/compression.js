"use strict";
/*!
 * Copyright (c) 2017-present Cliqz GmbH. All rights reserved.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const smaz_1 = require("@remusao/smaz");
const cosmetic_selector_1 = require("./codebooks/cosmetic-selector");
const network_csp_1 = require("./codebooks/network-csp");
const network_filter_1 = require("./codebooks/network-filter");
const network_hostname_1 = require("./codebooks/network-hostname");
const network_redirect_1 = require("./codebooks/network-redirect");
const raw_network_1 = require("./codebooks/raw-network");
const raw_cosmetic_1 = require("./codebooks/raw-cosmetic");
class Compression {
    constructor() {
        this.cosmeticSelector = new smaz_1.Smaz(cosmetic_selector_1.default);
        this.networkCSP = new smaz_1.Smaz(network_csp_1.default);
        this.networkRedirect = new smaz_1.Smaz(network_redirect_1.default);
        this.networkHostname = new smaz_1.Smaz(network_hostname_1.default);
        this.networkFilter = new smaz_1.Smaz(network_filter_1.default);
        this.networkRaw = new smaz_1.Smaz(raw_network_1.default);
        this.cosmeticRaw = new smaz_1.Smaz(raw_cosmetic_1.default);
    }
}
exports.default = Compression;
//# sourceMappingURL=compression.js.map