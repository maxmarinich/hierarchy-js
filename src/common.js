const hasParent = (parentId, flatList) => {
  return flatList.some((item) => item.id === parentId)
}

const findParents = (flatList) => {
  return flatList.filter((item) => !hasParent(item.parentId, flatList))
}

const findChildren = (child, flatList) => {
  return flatList.filter((item) => item.parentId === child.id)
}

const mergeChildren = (parent, children) => {
  if (!parent.children) {
    parent.children = []
  }
  parent.children = parent.children.concat(children)
}

module.exports = {
  findParents,
  findChildren,
  mergeChildren,
}
