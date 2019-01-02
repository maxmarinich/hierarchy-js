/* globals describe, expect, it */
const defaultOptions = require('../../../src/constants')
const { mergeOptionsBeforeCreateHierarchy } = require('../../../src/services/options')

describe('mergeOptionsBeforeCreateHierarchy', () => {
  it('should return default data', () => {
    expect(mergeOptionsBeforeCreateHierarchy()).toEqual(defaultOptions)
  })

  it('should return expected data in case 1', () => {
    const result = mergeOptionsBeforeCreateHierarchy({ children: 'items' })
    expect(result).toEqual({
      id: 'id',
      parentId: 'parentId',
      children: 'items',
      excludeParent: false,
      saveExtractedChildren: false,
    })
  })
})
