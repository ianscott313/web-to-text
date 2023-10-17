const createBrowserless = require('browserless')
const getHTML = require('html-get')
const { convert } = require('html-to-text');

// Create a browserless instance
const browserlessFactory = createBrowserless()

/**
 * Fetches HTML content from the specified URL
 * @param {string} url - The URL to fetch content from
 * @returns {Promise<string>} - The HTML content
 */
const getContent = async url => {
  // Create a browser context inside the Chromium process
  const browserContext = browserlessFactory.createContext()
  const getBrowserless = () => browserContext
  const result = await getHTML(url, { getBrowserless })
  // Close the browser context after it's used
  await getBrowserless((browser) => browser.destroyContext())
  return result
}

/**
 * Converts HTML content to plain text
 * @param {string} url - The URL to fetch content from
 * @returns {Promise<string>} - The converted plain text
 */
module.exports = async url => {
  getContent(url)
    .then(content => {
      const options = {
        wordwrap: 130,
      };
      const text = convert(content.html, options);
      // Kill the Chromium process 
      browserlessFactory.close()
      return text;
    })
    .catch(error => {
      console.error(error)
      // Kill the Chromium process 
      browserlessFactory.close()
    })
}
