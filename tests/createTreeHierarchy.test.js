/* globals describe, expect, it */
const { createTreeHierarchy } = require('../src')

describe('createTreeHierarchy', () => {
  it('should return default data', () => {
    expect(createTreeHierarchy()).toEqual(undefined)
  })

  it('should return expected data in case 1', () => {
    expect(createTreeHierarchy([{}])).toEqual([])
  })
})
