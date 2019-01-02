/* globals describe, expect, it */
const { hasChildren } = require('../../../src/services/common')
const { mergeOptionsBeforeCreateHierarchy } = require('../../../src/services/options')

describe('hasChildren', () => {
  mergeOptionsBeforeCreateHierarchy()

  it('should return default data', () => {
    const result = hasChildren()
    expect(result).toEqual(false)
  })

  it('should return expected data in case 1', () => {
    const result = hasChildren({ id: 1 })
    expect(result).toEqual(false)
  })

  it('should return expected data in case 3', () => {
    const result = hasChildren({ id: 1, children: [{ id: 2 }] })
    expect(result).toEqual(true)
  })
})
