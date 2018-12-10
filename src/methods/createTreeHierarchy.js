const { getParents, getChildren, mergeChildren } = require('../common')

const createTreeHierarchy = (items, parent) => {
  let children = []

  if (parent) children = getChildren(parent, items)
  else children = getParents(items)

  if (children.length) {
    parent && mergeChildren(parent, children)
    children.forEach((item) => createTreeHierarchy(items, item))
  }
  return children
}

module.exports = { createTreeHierarchy }
