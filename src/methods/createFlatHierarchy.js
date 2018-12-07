const { hasChildren } = require('../common')

const createFlatHierarchy = (array) => {
  let flatList = []

  array.forEach((item) => {
    if (hasChildren(item)) {
      const children = createFlatHierarchy(item.children)

      delete item.children
      children.push(item)

      flatList = flatList.concat(children)
    } else {
      flatList.push(item)
    }
  })
  return flatList
}

module.exports = { createFlatHierarchy }
