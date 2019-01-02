/* globals describe, expect, it */
const { getParents } = require('../../../src/services/common')
const { mergeOptionsBeforeCreateHierarchy } = require('../../../src/services/options')

describe('getParents', () => {
  mergeOptionsBeforeCreateHierarchy()

  it('should return default data', () => {
    expect(getParents()).toEqual([])
  })

  it('should return expected data in case 1', () => {
    const result = getParents([{ id: 1 }, { id: 2, parentId: 1 }])
    expect(result).toEqual([{ id: 1 }])
  })

  it('should return expected data in case 2', () => {
    const result = getParents([{ id: 1 }, { id: 2, parentId: 5 }])
    expect(result).toEqual([{ id: 1 }, { id: 2, parentId: 5 }])
  })
})
