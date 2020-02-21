/* globals describe, expect, it */
const { createTreeHierarchy } = require('../../src/index')

describe('createTreeHierarchy: with single parent', () => {
  it('should return default data', () => {
    expect(createTreeHierarchy()).toEqual(undefined)
  })

  it('should return expected data in case 1', () => {
    expect(createTreeHierarchy([{}])).toEqual([])
  })

  it('should return expected data in case 2', () => {
    const flatList = [
      { id: 1 },
      { id: 2, parentId: 1 },
      { id: 3, parentId: 2 },
      { id: 4, parentId: 'any' }
    ]
    const result = createTreeHierarchy(flatList)

    expect(result).toEqual([
      { id: 1, children: [{ id: 2, parentId: 1, children: [{ id: 3, parentId: 2 }] }] },
      { id: 4, parentId: 'any' },
    ])
  })

  it('should return expected data in case 3', () => {
    const flatList = [
      { id: 1 },
      { id: 2, parentId: 1 },
      { id: 3, parentId: 1 },
      { id: 4, parentId: 3 }
    ]

    const result = createTreeHierarchy(flatList)

    expect(result).toEqual([
      { id: 1,
        children: [
          { id: 2, parentId: 1 },
          { id: 3, parentId: 1, children: [{ id: 4, parentId: 3 }] }
        ]
      }
    ])
  })

  it('should return expected data in case 4', () => {
    const flatList = [
      { id: 1 },
      { id: 2, parentId: 1 },
      { id: 3, parentId: 2 },
      { id: 4, parentId: 3 }
    ]

    const result = createTreeHierarchy(flatList)

    expect(result).toEqual([
      { id: 1,
        children: [
          { id: 2, parentId: 1, children: [ { id: 3, parentId: 2, children: [{ id: 4, parentId: 3 }] }] },
        ]
      }
    ])
  })

  it('should return expected data in case 5', () => {
    const flatList = [
      { id: 1, parentId: 5 },
      { id: 2, parentId: 1 },
      { id: 3, parentId: 2 },
      { id: 4, parentId: 3 },
      { id: 5, children: [{ wtf: null }] }
    ]

    const result = createTreeHierarchy(flatList)

    expect(result).toEqual([
      {
        id: 5, children: [
          { wtf: null },
          { id: 1,
            parentId: 5,
            children: [
              { id: 2, parentId: 1, children: [ { id: 3, parentId: 2, children: [{ id: 4, parentId: 3 }] }] },
            ]
          }
        ]
      }
    ])
  })
})
