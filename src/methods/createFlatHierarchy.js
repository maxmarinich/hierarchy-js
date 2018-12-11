const { hasChildren, childrenKey } = require('../common')

const createFlatHierarchy = (items, parent, options = {}) => {
  let flatList = []

  items.forEach((item) => {
    if (hasChildren(item)) {
      const key = childrenKey()
      const children = createFlatHierarchy(item[key])

      !options.saveExtractedChildren && delete item[key]
      !options.excludeParent && children.unshift(item)

      flatList = flatList.concat(children)
    } else {
      !options.excludeParent && flatList.push(item)
    }
  })
  return flatList
}

module.exports = { createFlatHierarchy }
