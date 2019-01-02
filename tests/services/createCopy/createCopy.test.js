/* globals describe, expect, it */
const { createCopy } = require('../../../src/services/createCopy')

describe('createCopy', () => {
  it('should return default data', () => {
    expect(createCopy()).toEqual(undefined)
  })

  it('should return default data in case 1', () => {
    expect(createCopy(null)).toEqual(null)
  })

  it('should return default data in case 2', () => {
    expect(createCopy('')).toEqual('')
  })

  it('should return default data in case 3', () => {
    expect(createCopy({})).toEqual({})
  })

  it('should return default data in case 4', () => {
    expect(createCopy([])).toEqual([])
  })
})
