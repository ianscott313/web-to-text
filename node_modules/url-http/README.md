# url-http

![Last version](https://img.shields.io/github/tag/Kikobeats/url-http.svg?style=flat-square)
[![Coverage Status](https://img.shields.io/coveralls/Kikobeats/url-http.svg?style=flat-square)](https://coveralls.io/github/Kikobeats/url-http)
[![NPM Status](https://img.shields.io/npm/dm/url-http.svg?style=flat-square)](https://www.npmjs.org/package/url-http)

> Get input as normalized WHATWG URL.

## Install

```bash
$ npm install url-http --save
```

## Usage

```js
const urlHttp = require('url-http')

!!urlHttp('https://kikobeats.com') // ==> true
!!urlHttp('https://kikobeats.com') // ==> true
!!urlHttp('mailto://kiko@beats.com') // ==> false
!!urlHttp('callto:192.168.103.77+type=ip') // ==> false
```

If you need to run the package in a browser environment, you can save some bytes using the lightweight version:

```js
const urlHttp = require('url-http/lightweight')

!!urlHttp('https://kikobeats.com') // ==> true
!!urlHttp('https://kikobeats.com') // ==> true
!!urlHttp('mailto://kiko@beats.com') // ==> false
!!urlHttp('callto:192.168.103.77+type=ip') // ==> false
```

## License

**url-http** © [Kiko Beats](https://kikobeats.com), released under the [MIT](https://github.com/Kikobeats/url-http/blob/master/LICENSE.md) License.<br>
Authored and maintained by Kiko Beats with help from [contributors](https://github.com/Kikobeats/url-http/contributors).

> [kikobeats.com](https://kikobeats.com) · GitHub [Kiko Beats](https://github.com/Kikobeats) · Twitter [@Kikobeats](https://twitter.com/Kikobeats)
