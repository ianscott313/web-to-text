# html-encode

![Last version](https://img.shields.io/github/tag/Kikobeats/html-encode.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/Kikobeats/html-encode/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/html-encode)
[![Coverage Status](https://img.shields.io/coveralls/Kikobeats/html-encode.svg?style=flat-square)](https://coveralls.io/github/Kikobeats/html-encode)
[![NPM Status](https://img.shields.io/npm/dm/html-encode.svg?style=flat-square)](https://www.npmjs.org/package/html-encode)

> A Node.js library for converting HTML documents of arbitrary encoding into a target encoding (utf8, utf16, etc).

### Install

```bash
$ npm install html-encode
```

### Usage

```js
'use strict'

const got = require('got')
const toUTF8 = require('html-encode')('utf-8')
const url = process.argv[2]

;(async () => {
  const { body: buffer, headers } = await got(url, { encoding: null })
  const str = toUTF8(buffer, headers['content-type'])
  console.log(str)
})()
```

See more at [examples](/examples).

### License

The code is available under [MIT license](LICENSE).
