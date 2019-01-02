/* globals describe, expect, it */
const { iterator } = require('../../../src/services/createCopy')

describe('iterator', () => {
  const callback = (value) => value

  it('should return default data', () => {
    expect(iterator()).toEqual(undefined)
  })

  it('should return default data in case 1', () => {
    expect(iterator(null)).toEqual(undefined)
  })

  it('should return default data in case 2', () => {
    expect(iterator(null, [])).toEqual([])
  })

  it('should return default data in case 3', () => {
    expect(iterator([1], [], callback)).toEqual([1])
  })

  it('should return default data in case 4', () => {
    expect(iterator({ id: 1 }, {}, callback)).toEqual({ id: 1 })
  })
})
