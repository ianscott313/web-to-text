# didyoumean3

[![NPM](https://nodei.co/npm/didyoumean3.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/didyoumean3/)


[![Greenkeeper badge](https://badges.greenkeeper.io/cbbfcd/didyoumean3.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.com/cbbfcd/didyoumean3.svg?branch=master)](https://travis-ci.com/cbbfcd/didyoumean3)
![Codecov](https://img.shields.io/codecov/c/github/cbbfcd/didyoumean3)
![David](https://img.shields.io/david/dev/cbbfcd/didyoumean3)
![npm](https://img.shields.io/npm/dw/didyoumean3)
![npm](https://img.shields.io/npm/v/didyoumean3)
![GitHub top language](https://img.shields.io/github/languages/top/cbbfcd/didyoumean3)
![NPM](https://img.shields.io/npm/l/didyoumean3)


## Features

- Built-in fastest levenshtein algorithm
- Support custom return results
- Typescript
- Super fast
- More flexible configuration
- Super small (production.min.js < 2kb) and tree shaking! [more info](https://bundlephobia.com/result?p=didyoumean3@1.2.0)

## Usage

### install

```js
npm i didyoumean3

// or
yarn add didyoumean3
```

### use case

- **base use**

```js
import { didyoumean3 } from 'didyoumean3'
// or
const { default: didyoumean3 } = require('didyoumean3');

let input = 'insargrm'
let list = [
  'facebook', 'INSTAgram', ' in stagram', 'baidu', 'twitter', 'wechat', 'instagram', 'linkedin'
]

console.log(didyoumean3(input, list));
// will print:
// {
//   winner: 'instagram', // 🔥 This is the best match, our winner！
//   matched: [
//     {
//       score: 8,
//       target: 'facebook',
//     },
//     {
//       score: 3,
//       target: 'instagram',
//     },
//     {
//       score: 7,
//       target: 'linkedin',
//     },
//     // ...
//   ],
// }
```

- **optional configuration**

`didyoumea3` has some built-in string formatting configuration items：

* `ignore`: Ignore case when comparing, default false. 
  
* `trim`: Use `string.trim` format the string, default true.
  
* `trimAll`: Use regexp `/\s+/g` formate the string, default false.

* `diacritics`: Use `normalize` Api, e.g. 'café' -> 'café'.normalize(), default false 
  
* `normalize`: Customize the formatting function by yourself.

> 🔥 If these parameters don't meet your requirements, you can customize the formatting function through `normalize`.

> 🔥 When using the custom normalize function, the above string formatting configurations will be ignored.

```js
didyoumean3(input, target, { normalize: (s: string) => s.trim() } );
```

---

`result`: Customize the structure of the results you want to return

```js
// default result may be null or {winner: xx, matched: []}
type Res = null | { matched: any[], winner: string }

// you can custom your own result style!!
const result = (res: Res) => {
  if (!res) return 'nothing matched!'
  else return res
}

didyoumean3(input, target, { result } );
```

---

`filter`: You can filter the results you want, such as those with a score greater than 5

```js
let i2 = 'insargrm';
let l2 = ['facebook', 'instagram', 'linkedin'];
expect(
  didyoumean3(i2, l2, { filter: (score: number, item: any) => score >= 7 })
    ?.matched.length
).toBe(2); 
```

---

## benchmark

```js
didyoumean x 159,428 ops/sec ±1.63% (85 runs sampled)
didyoumean2 x 227,343 ops/sec ±1.26% (90 runs sampled)
didyoumean3 x 400,683 ops/sec ±0.59% (89 runs sampled)
Fastest is didyoumean3
```

## contributors

> Both issure and pr are welcome!

## license

[MIT](./LICENSE)
