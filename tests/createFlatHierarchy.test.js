/* globals describe, expect, it */
const { createFlatHierarchy } = require('../src')
const flatStructure = require('./mockData/flatStructure')
const treeStructure = require('./mockData/treeStructure')

describe('createFlatHierarchy', () => {
  it('should return default data', () => {
    expect(createFlatHierarchy()).toEqual(undefined)
  })

  it('should return expected data in case 1', () => {
    expect(createFlatHierarchy([{}])).toEqual([{}])
  })

  it('should return expected data in case 2', () => {
    //expect(createFlatHierarchy(treeStructure)).toEqual(flatStructure)
  })

  it('should return expected data in case 3', () => {
    let result = createFlatHierarchy(treeStructure, { excludeParent: true })
    const expectedResult = [{ id: 2, parentId: 1 }, { id: 3, parentId: 2 }]
    expect(result).toEqual(expectedResult)
  })
})
