import flv from './src/flv';
import gif from './src/gif';
import html from './src/html';
import ico from './src/ico';
import jpg from './src/jpeg';
import js from './src/javascript';
import json from './src/json';
import mp3 from './src/mp3';
import mp4 from './src/mp4';
import pdf from './src/pdf';
import png from './src/png';
import svg from './src/svg';
import txt from './src/txt';
import wav from './src/wav';
import webm from './src/webm';
import webp from './src/webp';
import wmv from './src/wmv';
export declare function getFallbackTextResource(): {
    contentType: string;
    aliases: string[];
    body: string;
};
export declare function getFallbackBlobResource(): {
    contentType: string;
    aliases: string[];
    body: string;
};
export declare function hasResourceForMime(mime: string): boolean;
export declare function getResourceForMime(mime: string): {
    contentType: string;
    body: string;
};
export declare function getDataUrlForMime(mime: string): string;
export { flv, gif, html, ico, jpg, js, json, mp3, mp4, pdf, png, svg, txt, wav, webm, webp, wmv, };
//# sourceMappingURL=index.d.ts.map