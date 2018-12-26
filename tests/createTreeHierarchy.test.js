/* globals describe, expect, it */
const { createTreeHierarchy } = require('../src')
const flatHierarchy = require('./mockData/flatHierarchy')
const treeHierarchy = require('./mockData/treeHierarchy')
const exp = [
  { id: 1 },
  { children: {}, id: 2 },
  { children: [{ id: 123 }], id: 3 },
  { children: {}, id: 4 },
  { children: null, id: 6, parentId: 111 },
]
describe('createTreeHierarchy', () => {
  it('should return default data', () => {
    expect(createTreeHierarchy()).toEqual(undefined)
  })

  it('should return expected data in case 1', () => {
    expect(createTreeHierarchy([{}])).toEqual([])
  })

  it('should return expected data in case 2', () => {
    const res = createTreeHierarchy(flatHierarchy)
    expect(res).toEqual(exp)
    console.log('exp: 1: ', JSON.stringify(res))
  })

  it('should return expected data in case 3', () => {
    const res = createTreeHierarchy(flatHierarchy)
    expect(res).toEqual(exp)
    console.log('exp: 2: ', JSON.stringify(res))
  })
})
