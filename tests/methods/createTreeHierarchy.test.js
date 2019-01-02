/* globals describe, expect, it */
const { createTreeHierarchy } = require('../../src/index')

describe('createTreeHierarchy', () => {
  it('should return default data', () => {
    expect(createTreeHierarchy()).toEqual(undefined)
  })

  it('should return expected data in case 1', () => {
    expect(createTreeHierarchy([{}])).toEqual([])
  })

  it('should return expected data in case 2', () => {
    const flatList = [{ id: 1 }, { id: 2, parentId: 1 }, { id: 3, parentId: 2 }, { id: 4, parentId: 'any' }]
    const result = createTreeHierarchy(flatList)

    expect(result).toEqual([
      { id: 1, children: [{ id: 2, parentId: 1, children: [{ id: 3, parentId: 2 }] }] },
      { id: 4, parentId: 'any' },
    ])
  })

  it('should return expected data in case 3', () => {
    const flatList = [
      { itemId: 1 },
      { itemId: 2, parentItemId: 1 },
      { itemId: 3, parentItemId: 2 },
      { itemId: 4, parentItemId: 'any' },
    ]

    const options = { id: 'itemId', parentId: 'parentItemId' }
    const result = createTreeHierarchy(flatList, options)

    expect(result).toEqual([
      { itemId: 1, children: [{ itemId: 2, parentItemId: 1, children: [{ itemId: 3, parentItemId: 2 }] }] },
      { itemId: 4, parentItemId: 'any' },
    ])
  })
})
