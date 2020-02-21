const { createCopy } = require('../services/createCopy')
const { id, childrenKey, parentId, mergeOptionsBeforeCreateHierarchy } = require('./options')

const hasParent = (parentId, items) => {
  if (Array.isArray(parentId)) {
    return items.some((item) => parentId.includes(id(item)))
  }
  return items.some((item) => id(item) === parentId)
}

const hasChildren = (item) => {
  const key = childrenKey()
  return !!(item && item[key] && item[key].length)
}

const getParents = (items = []) => {
  return items.filter((item) => id(item) && !hasParent(parentId(item), items))
}

const getChildren = (child, items) => {
  const childId = id(child)
  return childId ? items.filter((item) => parentId(item) === childId) : []
}

const getParentChildren = (parent) => {
  const key = childrenKey()
  return Array.isArray(parent[key]) ? parent[key].slice() : []
}

const mergeChildren = (parent, children) => {
  if (children) {
    const parentChildren = getParentChildren(parent)
    parent[childrenKey()] = parentChildren.concat(children)
  }
  return parent
}

const createHierarchy = (method) => (array, options) => {
  if (array && array.length) {
    const OPTIONS = mergeOptionsBeforeCreateHierarchy(options)
    return method(createCopy(array), null, OPTIONS)
  }
}

module.exports = { getParents, getChildren, mergeChildren, hasChildren, childrenKey, createHierarchy }
