const { getParents, getChildren, mergeChildren, mergeOptionsBeforeCreateHierarchy } = require('../common')

const createHierarchy = (flatList, options) => {
  if (Array.isArray(flatList)) {
    mergeOptionsBeforeCreateHierarchy(options)
    return createTreeHierarchy(flatList)
  }
}

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

module.exports = createHierarchy
