const defaultKeys = require('./options')

let KEYS = {}

const id = (item) => item && item[KEYS.id]
const parentId = (item) => item && item[KEYS.parentId]

const hasParent = (parentId, flatList) => {
  return flatList.some((item) => id(item) === parentId)
}

const hasChildren = (item) => {
  return item && item.children && item.children.length
}

const getParents = (flatList) => {
  return flatList.filter((item) => !hasParent(parentId(item), flatList))
}

const getChildren = (child, flatList) => {
  const childId = id(child)
  return childId ? flatList.filter((item) => parentId(item) === childId) : []
}

const getParentChildren = (parent) => {
  return Array.isArray(parent[KEYS.children]) ? parent[KEYS.children] : []
}

const mergeChildren = (parent, children) => {
  const parentChildren = getParentChildren(parent)
  parent[KEYS.children] = parentChildren.concat(children)
}

const mergeOptionsBeforeCreateHierarchy = (options = {}) => {
  KEYS = { ...defaultKeys, ...options }
}

const createHierarchy = (method) => (flatList, options) => {
  if (Array.isArray(flatList)) {
    mergeOptionsBeforeCreateHierarchy(options)
    return method(flatList)
  }
}

module.exports = { getParents, getChildren, mergeChildren, createHierarchy, hasChildren }
