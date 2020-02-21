/* globals describe, expect, it */
const { createTreeHierarchy } = require('../../src/index')

describe('createTreeHierarchy: with multiple parents', () => {
  it('should return expected data in case 1', () => {
    const flatList = [
      { id: 1 },
      { id: 2, parentId: [1, 3] },
      { id: 3, parentId: 4 },
      { id: 4, parentId: 'any' }
    ]
    const result = createTreeHierarchy(flatList)

    expect(result).toEqual([
      { id: 1, children: [{ id: 2, parentId: [1, 3] }] },
      { id: 4, parentId: 'any', children: [{ id: 3, parentId: 4, children: [{ id: 2, parentId: [1, 3] }] } ] },
    ])
  })

  it('should return expected data in case 2', () => {
    const flatList = [
      { id: 1, children: [{ wtf: null }] },
      { id: 2, parentId: [1, 3] },
      { id: 3, parentId: 4 },
      { id: 4, parentId: 'any' }
    ]
    const result = createTreeHierarchy(flatList)

    expect(result).toEqual([
      { id: 1, children: [{ wtf: null }, { id: 2, parentId: [1, 3] }] },
      { id: 4, parentId: 'any', children: [{ id: 3, parentId: 4, children: [{ id: 2, parentId: [1, 3] }] } ] },
    ])
  })

  it('should return expected data in case 3', () => {
    const flatList = [
      { id: 1, parentId: [4] },
      { id: 2, parentId: [1, 3] },
      { id: 3, parentId: 4 },
      { id: 4, parentId: 'any' }
    ]
    const result = createTreeHierarchy(flatList)

    expect(result).toEqual([
      { id: 4, parentId: 'any', children: [
        { id: 1, parentId: [4], children: [ { id: 2, parentId: [1, 3] }] },
        { id: 3, parentId: 4, children: [{ id: 2, parentId: [1, 3] }] } ] },
    ])
  })

  it('should return expected data in case 4', () => {
    const flatList = [
      { id: 1, parentId: [4, 6], children: [null] },
      { id: 2, parentId: [1, 3], children: [1] },
      { id: 3, parentId: 4 },
      { id: 4, children: [1] },
      { id: 6 }
    ]
    const result = createTreeHierarchy(flatList)

    expect(result).toEqual([
      {
        id: 4,
        children: [
          1,
          { id: 1, parentId: [4, 6], children: [ null, { id: 2, parentId: [1, 3], children: [1] }] },
          { id: 3, parentId: 4, children: [ { id: 2, parentId: [1, 3], children: [1] }] }
        ]
      },
      {
        id: 6,
        children: [
          { id: 1, parentId: [4, 6], children: [ null, { id: 2, parentId: [1, 3], children: [1] }] },
        ]
      }

    ])
  })
})
