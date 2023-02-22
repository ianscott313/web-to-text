'use strict'

const HTML_REGEX = /^\s*</

module.exports = value => HTML_REGEX.test(value)
