/* globals describe, expect, it */
const { mergeChildren } = require('../../../src/services/common')
const { mergeOptionsBeforeCreateHierarchy } = require('../../../src/services/options')

describe('mergeChildren', () => {
  mergeOptionsBeforeCreateHierarchy()

  it('should return default data', () => {
    const result = mergeChildren()
    expect(result).toEqual(undefined)
  })

  it('should return expected data in case 1', () => {
    const result = mergeChildren({ id: 1 })
    expect(result).toEqual({ id: 1 })
  })

  it('should return expected data in case 2', () => {
    const result = mergeChildren({ id: 1, children: [] }, [{}])
    expect(result).toEqual({ id: 1, children: [{}] })
  })

  it('should return expected data in case 3', () => {
    const result = mergeChildren({ id: 1 }, [{ id: 2 }])
    expect(result).toEqual({ id: 1, children: [{ id: 2 }] })
  })
})
