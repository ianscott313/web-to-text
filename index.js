const createBrowserless = require('browserless')
const getHTML = require('html-get')
const { convert } = require('html-to-text');

// Spawn Chromium process once
const browserlessFactory = createBrowserless()

const getContent = async url => {
  // create a browser context inside Chromium process
  const browserContext = browserlessFactory.createContext()
  const getBrowserless = () => browserContext
  const result = await getHTML(url, { getBrowserless })
  // close the browser context after it's used
  await getBrowserless((browser) => browser.destroyContext())
  return result
}

module.exports = async url => {
  getContent(url)
  .then(content => {
    const options = {
      wordwrap: 130,
    };
    const text = convert(content.html, options);
    // kill Chromium process 
    browserlessFactory.close()
    return text;
  })
  .catch(error => {
    console.error(error)
    // kill Chromium process 
    browserlessFactory.close()
  })
}