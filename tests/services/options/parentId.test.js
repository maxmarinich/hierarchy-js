/* globals describe, expect, it */
const options = require('../../../src/services/options')

describe('parentId', () => {
  it('should return default data', () => {
    expect(options.parentId()).toEqual(undefined)
  })

  it('should return expected data in case 1', () => {
    options.mergeOptionsBeforeCreateHierarchy()
    expect(options.parentId({ id: 1 })).toEqual(undefined)
  })

  it('should return expected data in case 2', () => {
    options.mergeOptionsBeforeCreateHierarchy()
    expect(options.parentId({ parentId: 1 })).toEqual(1)
  })

  it('should return expected data in case 3', () => {
    options.mergeOptionsBeforeCreateHierarchy({ parentId: 'parent' })
    expect(options.parentId({ parent: 1 })).toEqual(1)
  })
})
