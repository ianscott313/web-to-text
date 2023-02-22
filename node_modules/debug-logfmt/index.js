'use strict'

const { encode } = require('@jclem/logfmt2')
const debug = require('debug-fabulous')(require('debug'))

const LEVELS = ['info', 'warn', 'error']

const createLogger = log => (...args) =>
  log(args.map(arg => (typeof arg === 'string' ? arg : encode(arg))).join(' '))

module.exports = (env, { levels = LEVELS } = {}) => {
  const log = createLogger(debug(env))
  levels.forEach(level => (log[level] = createLogger(debug(`${env}:${level}`))))
  return log
}
