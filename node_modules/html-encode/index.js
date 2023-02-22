'use strict'

const jschardet = require('jschardet')
const isBuffer = require('is-buffer')
const iconv = require('iconv-lite')
const charset = require('charset')

const inferredEncoding = content => {
  const charset = jschardet.detect(content)
  return charset && charset.encoding
}

module.exports = targetEncoding => {
  if (!iconv.encodingExists(targetEncoding)) {
    throw new TypeError(`Target encoding '${targetEncoding}' not supported.`)
  }

  const getEncoding = (content, contentType) =>
    charset({ 'content-type': contentType }, content) ||
    inferredEncoding(content) ||
    targetEncoding

  return (buffer, contentType) => {
    if (!isBuffer(buffer)) throw new TypeError('content should be a buffer.')
    const encoding = getEncoding(buffer, contentType)
    return iconv.decode(buffer, encoding)
  }
}
