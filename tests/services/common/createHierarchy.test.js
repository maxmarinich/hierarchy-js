/* globals describe, expect, it */
const { createHierarchy } = require('../../../src/services/common')

describe('createHierarchy', () => {
  const method = (items, parent, options) => ({ items, parent, options })

  it('should return default data', () => {
    const result = createHierarchy()
    expect(typeof result).toEqual('function')
  })

  it('should return expected data in case 1', () => {
    const result = createHierarchy(method)()
    expect(result).toEqual(undefined)
  })

  it('should return expected data in case 2', () => {
    const result = createHierarchy(method)
    expect(result([], {})).toEqual(undefined)
  })

  it('should return expected data in case 3', () => {
    const result = createHierarchy(method)
    expect(result([{}])).toEqual({
      items: [{}],
      options: {
        id: 'id',
        parentId: 'parentId',
        children: 'children',
        excludeParent: false,
        saveExtractedChildren: false,
      },
      parent: null,
    })
  })

  it('should return expected data in case 4', () => {
    const result = createHierarchy(method)
    expect(result([{}], { id: 'item' })).toEqual({
      items: [{}],
      options: {
        id: 'item',
        parentId: 'parentId',
        children: 'children',
        excludeParent: false,
        saveExtractedChildren: false,
      },
      parent: null,
    })
  })
})
