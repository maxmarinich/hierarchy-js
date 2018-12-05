const prepareInitialProps = (flatList) => {
  return flatList.map((item) => extendInstanceProps(item, flatList))
}

const extendInstanceProps = (item, flatList) => {
  return hasParent(item.parentId, flatList) ? item : setParentMarker(item)
}

const clearExtendedProps = (parents) => {
  return parents.map(clearParentMarker)
}

const hasParent = (parentId, flatList) => {
  return flatList.some((item) => parentId === item.id)
}

const setParentMarker = (item) => {
  return { ...item, __parent__: true }
}

const clearParentMarker = (parent) => {
  delete parent.__parent__
  return parent
}

module.exports = {
  prepareInitialProps,
  clearExtendedProps,
}
