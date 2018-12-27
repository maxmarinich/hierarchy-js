const treeStructureDefault = [
  { children: [{ children: [{ id: 3, parentId: 2 }], id: 2, parentId: 1 }], id: 1 },
  { id: 4, parentId: 'any' },
]
const treeStructureWithOptions = [
  { itemId: 1, items: [{ itemId: 2, items: [{ itemId: 3, parentItemId: 2 }], parentItemId: 1 }] },
  { itemId: 4, parentItemId: 'any' },
]

module.exports = { treeStructureDefault, treeStructureWithOptions }
