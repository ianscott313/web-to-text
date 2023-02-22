/*!
 * Copyright (c) 2017-present Cliqz GmbH. All rights reserved.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Smaz } from '@remusao/smaz';
import cosmeticSelectorCodebook from './codebooks/cosmetic-selector';
import networkCSPCodebook from './codebooks/network-csp';
import networkFilterCodebook from './codebooks/network-filter';
import networkHostnameCodebook from './codebooks/network-hostname';
import networkRedirectCodebook from './codebooks/network-redirect';
import networkRawCodebook from './codebooks/raw-network';
import cosmeticRawCodebook from './codebooks/raw-cosmetic';
export default class Compression {
    constructor() {
        this.cosmeticSelector = new Smaz(cosmeticSelectorCodebook);
        this.networkCSP = new Smaz(networkCSPCodebook);
        this.networkRedirect = new Smaz(networkRedirectCodebook);
        this.networkHostname = new Smaz(networkHostnameCodebook);
        this.networkFilter = new Smaz(networkFilterCodebook);
        this.networkRaw = new Smaz(networkRawCodebook);
        this.cosmeticRaw = new Smaz(cosmeticRawCodebook);
    }
}
//# sourceMappingURL=compression.js.map