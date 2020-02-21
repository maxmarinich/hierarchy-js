const defaultOptions = require('../constants')

let OPTIONS = defaultOptions

const id = (item) => item && item[OPTIONS.id]
const parentId = (item) => item && item[OPTIONS.parentId]
const childrenKey = () => OPTIONS.children

const mergeOptionsBeforeCreateHierarchy = (options = {}) => {
  OPTIONS = { ...defaultOptions, ...options }
  return OPTIONS
}

module.exports = { id, parentId, childrenKey, mergeOptionsBeforeCreateHierarchy }
