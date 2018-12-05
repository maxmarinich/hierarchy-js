const { prepareInitialProps, clearExtendedProps } = require('./common')

const createTreeHierarchy = (flatList) => {
  return unflat(prepareInitialProps(flatList))
}

const unflat = (flatList, child) => {
  let tree = []
  const children = child
    ? flatList.filter((item) => item.parentId === child.id)
    : flatList.filter((item) => item.__parent__)

  if (children.length) {
    if (!child) {
      tree = clearExtendedProps(children)
    } else {
      if (!child['children']) {
        child['children'] = children
      } else {
        child['children'] = child.children.concat(children)
      }
    }

    children.forEach((item) => unflat(flatList, item))
  }

  return tree
}

module.exports = createTreeHierarchy
