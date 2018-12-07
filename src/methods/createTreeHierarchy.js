const { getParents, getChildren, mergeChildren } = require('../common')

const createTreeHierarchy = (flatList, parent) => {
  let children = []

  if (parent) children = getChildren(parent, flatList)
  else children = getParents(flatList)

  if (children.length) {
    parent && mergeChildren(parent, children)
    children.forEach((item) => createTreeHierarchy(flatList, item))
  }
  return children
}

module.exports = { createTreeHierarchy }
