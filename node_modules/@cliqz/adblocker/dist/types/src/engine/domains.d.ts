/*!
 * Copyright (c) 2017-present Cliqz GmbH. All rights reserved.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { StaticDataView } from '../data-view';
export declare class Domains {
    static parse(parts: string[]): Domains | undefined;
    static deserialize(buffer: StaticDataView): Domains;
    readonly entities: Uint32Array | undefined;
    readonly hostnames: Uint32Array | undefined;
    readonly notEntities: Uint32Array | undefined;
    readonly notHostnames: Uint32Array | undefined;
    constructor({ entities, hostnames, notEntities, notHostnames, }: {
        entities: Uint32Array | undefined;
        hostnames: Uint32Array | undefined;
        notEntities: Uint32Array | undefined;
        notHostnames: Uint32Array | undefined;
    });
    updateId(hash: number): number;
    serialize(buffer: StaticDataView): void;
    getSerializedSize(): number;
    match(hostnameHashes: Uint32Array, entityHashes: Uint32Array): boolean;
}
//# sourceMappingURL=domains.d.ts.map