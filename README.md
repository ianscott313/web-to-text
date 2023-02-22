# web-to-text
Node package to scrape content from a web url and convert it into text. Great for language models like ChatGPT.

## Installation
```
npm install web-to-text
```

## Usage
```
const getText = require('web-to-text')

const getTextFromURL = async url => {
  const result = await getText(url)
  console.log(result)
}

getTextFromURL('https://example.com');

// EXAMPLE DOMAIN
// This domain is for use in illustrative examples in documents. You may use this domain in literature without prior coordination or asking for permission.
// More information... [https://www.iana.org/domains/example]

```