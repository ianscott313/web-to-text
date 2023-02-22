'use strict'

const debug = require('debug')('require-one-of')
const humanizeList = require('humanize-list')
const resolveFrom = require('resolve-from')
const assert = require('assert')
const path = require('path')

const CACHE = Object.create(null)

const createError = modules =>
  new TypeError(
    `${humanizeList(
      modules.map(m => `'${m}'`),
      {
        conjunction: 'or'
      }
    )} not found as dependency. Please, install one of them.`
  )

const relativeNodeModulesPath = path.resolve(__dirname, '..', '..')

/**
 * Normally, you are going to get node_modules from the current
 * execution path.
 *
 * This is not applied when you are running it using `npx`
 * In that case, node_modules is relative to the dependency itself.
 */
const resolveModule = module => {
  const relativeToProcess = resolveFrom.silent(process.cwd(), module)
  debug(` - ${module} at ${process.cwd()} → ${!!relativeToProcess}`)
  if (relativeToProcess) return relativeToProcess

  const relativeToPath = resolveFrom.silent(relativeNodeModulesPath, module)
  debug(` - ${module} at ${relativeNodeModulesPath} → ${!!relativeToPath}`)
  if (relativeToPath) return relativeToPath

  return undefined
}

const find = (modules, error = createError) => {
  debug(`searching ${modules}`)
  for (const module of modules) {
    const modulePath = resolveModule(module)
    if (modulePath) {
      debug(`found ${module} at ${modulePath}`)
      return require(modulePath)
    }
  }

  debug(`${modules} not found, throwing an error`)
  throw error(modules)
}

module.exports = (modules, fn) => {
  assert(Array.isArray(modules), 'Need to provide a collection')
  const key = modules.join(',')
  return CACHE[key] || (CACHE[key] = find(modules, fn))
}

module.exports.cache = CACHE
