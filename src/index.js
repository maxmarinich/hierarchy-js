const flatList = require('../tests/mockData/flatHierarchy')
const createTreeHierarchy = require('./createTreeHierarchy')

const tree = createTreeHierarchy(flatList)

console.log(JSON.stringify(tree))
