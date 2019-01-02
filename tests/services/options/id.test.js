/* globals describe, expect, it */
const options = require('../../../src/services/options')

describe('id', () => {
  it('should return default data', () => {
    expect(options.id()).toEqual(undefined)
  })

  it('should return expected data in case 1', () => {
    options.mergeOptionsBeforeCreateHierarchy()
    expect(options.id({})).toEqual(undefined)
  })

  it('should return expected data in case 2', () => {
    options.mergeOptionsBeforeCreateHierarchy()
    expect(options.id({ id: 1 })).toEqual(1)
  })

  it('should return expected data in case 3', () => {
    options.mergeOptionsBeforeCreateHierarchy({ id: 'item' })
    expect(options.id({ item: 1 })).toEqual(1)
  })
})
