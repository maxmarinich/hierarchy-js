/* globals describe, expect, it */
const { createFlatHierarchy } = require('../../src/index')

describe('createFlatHierarchy', () => {
  const treeStructureDefault = [
    { id: 1, children: [{ id: 2, parentId: 1, children: [{ id: 3, parentId: 2 }] }] },
    { id: 4, parentId: 'any' },
  ]
  const treeStructureWithOptions = [
    { itemId: 1, items: [{ itemId: 2, items: [{ itemId: 3, parentItemId: 2 }], parentItemId: 1 }] },
    { itemId: 4, parentItemId: 'any' },
  ]

  it('should return default data', () => {
    expect(createFlatHierarchy()).toEqual(undefined)
  })

  it('should return expected data in case 1', () => {
    expect(createFlatHierarchy([{}])).toEqual([{}])
  })

  it('should return expected data in case 2', () => {
    let result = createFlatHierarchy(treeStructureDefault)
    const expectedResult = [{ id: 1 }, { id: 2, parentId: 1 }, { id: 3, parentId: 2 }, { id: 4, parentId: 'any' }]
    expect(result).toEqual(expectedResult)
  })

  it('should return expected data in case 3', () => {
    let result = createFlatHierarchy(treeStructureDefault, { excludeParent: true })
    const expectedResult = [{ id: 2, parentId: 1 }, { id: 3, parentId: 2 }]
    expect(result).toEqual(expectedResult)
  })

  it('should return expected data in case 4', () => {
    const options = { id: 'itemId', parentId: 'parentItemId', children: 'items', excludeParent: true }
    const result = createFlatHierarchy(treeStructureWithOptions, options)
    const expectedResult = [{ itemId: 2, parentItemId: 1 }, { itemId: 3, parentItemId: 2 }]
    expect(result).toEqual(expectedResult)
  })

  it('should return expected data in case 5', () => {
    const options = { id: 'itemId', parentId: 'parentItemId', children: 'items' }
    const result = createFlatHierarchy(treeStructureWithOptions, options)
    expect(result).toEqual([
      { itemId: 1 },
      { itemId: 2, parentItemId: 1 },
      { itemId: 3, parentItemId: 2 },
      { itemId: 4, parentItemId: 'any' },
    ])
  })
})
