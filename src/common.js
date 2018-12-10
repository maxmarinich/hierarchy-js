const defaultOptions = require('./options')

let OPTIONS = {}

const id = (item) => item && item[OPTIONS.id]
const parentId = (item) => item && item[OPTIONS.parentId]
const childrenKey = () => OPTIONS.children

const hasParent = (parentId, items) => {
  return items.some((item) => id(item) === parentId)
}

const hasChildren = (item) => {
  const key = childrenKey()
  return item && item[key] && item[key].length
}

const getParents = (items) => {
  return items.filter((item) => !hasParent(parentId(item), items))
}

const getChildren = (child, items) => {
  const childId = id(child)
  return childId ? items.filter((item) => parentId(item) === childId) : []
}

const getParentChildren = (parent) => {
  const key = childrenKey()
  return Array.isArray(parent[key]) ? parent[key] : []
}

const mergeChildren = (parent, children) => {
  const parentChildren = getParentChildren(parent)
  parent[childrenKey()] = parentChildren.concat(children)
}

const mergeOptionsBeforeCreateHierarchy = (options = {}) => {
  OPTIONS = { ...defaultOptions, ...options }
}

const createHierarchy = (method) => (array, options) => {
  if (array && array.length) {
    mergeOptionsBeforeCreateHierarchy(options)
    return method(array, null, OPTIONS)
  }
}

module.exports = { getParents, getChildren, mergeChildren, createHierarchy, hasChildren, childrenKey }
