/* globals describe, expect, it */
const options = require('../../../src/services/options')

describe('childrenKey', () => {
  it('should return default data', () => {
    expect(options.childrenKey()).toEqual(undefined)
  })

  it('should return expected data in case 1', () => {
    options.mergeOptionsBeforeCreateHierarchy()
    expect(options.childrenKey()).toEqual('children')
  })

  it('should return expected data in case 2', () => {
    options.mergeOptionsBeforeCreateHierarchy({ children: 'items' })
    expect(options.childrenKey()).toEqual('items')
  })
})
