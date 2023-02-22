# kill-process-group

![Last version](https://img.shields.io/github/tag/Kikobeats/kill-process-group.svg?style=flat-square)
[![Coverage Status](https://img.shields.io/coveralls/Kikobeats/kill-process-group.svg?style=flat-square)](https://coveralls.io/github/Kikobeats/kill-process-group)
[![NPM Status](https://img.shields.io/npm/dm/kill-process-group.svg?style=flat-square)](https://www.npmjs.org/package/kill-process-group)

> It kills a process group. No dependencies. Windows support.

## Install

```bash
$ npm install kill-process-group --save
```

## Usage

```js
const killProcessGroup = require('kill-process-group')
const execa = require('execa')

const proc = execa.node(scripts.parent, {
  detached: process.platform !== 'win32',
  stdio: 'inherit'
})

await killProcessGroup(proc)
```

## License

**kill-process-group** © [Kiko Beats](https://kikobeats.com), released under the [MIT](https://github.com/Kikobeats/kill-process-group/blob/master/LICENSE.md) License.<br>
Authored and maintained by [Kiko Beats](https://kikobeats.com) with help from [contributors](https://github.com/Kikobeats/kill-process-group/contributors).

> [kikobeats.com](https://kikobeats.com) · GitHub [Kiko Beats](https://github.com/Kikobeats) · Twitter [@Kikobeats](https://twitter.com/Kikobeats)
