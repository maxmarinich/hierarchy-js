const { findParents, findChildren, mergeChildren } = require('./common')

const createTreeHierarchy = (flatList, parent) => {
  let children = []

  if (parent) children = findChildren(parent, flatList)
  else children = findParents(flatList)

  if (children.length) {
    parent && mergeChildren(parent, children)

    children.forEach((item) => createTreeHierarchy(flatList, item))
  }
  return children
}

module.exports = createTreeHierarchy
