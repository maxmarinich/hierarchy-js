const flatList = require('../tests/mockData/flatHierarchy')
const createTreeHierarchy = require('./methods/createTreeHierarchy')

const tree = createTreeHierarchy(flatList)

console.log(JSON.stringify(tree))
