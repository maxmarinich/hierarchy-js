/* globals describe, expect, it */
const { getChildren } = require('../../../src/services/common')
const { mergeOptionsBeforeCreateHierarchy } = require('../../../src/services/options')

describe('getChildren', () => {
  mergeOptionsBeforeCreateHierarchy()

  it('should return default data', () => {
    expect(getChildren()).toEqual([])
  })

  it('should return expected data in case 1', () => {
    const items = [{ id: 1 }, { id: 2, parentId: 1 }]
    const result = getChildren({ id: 1 }, items)
    expect(result).toEqual([{ id: 2, parentId: 1 }])
  })

  it('should return expected data in case 2', () => {
    const items = [{ id: 1 }, { id: 2, parentId: 5 }]
    const result = getChildren({ id: 1 }, items)
    expect(result).toEqual([])
  })
})
