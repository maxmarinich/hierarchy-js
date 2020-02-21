/* globals describe, expect, it */
const { mergeChildren } = require('../../../src/services/common')

describe('mergeChildren', () => {
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

  it('should return expected data in case 4', () => {
    const result = mergeChildren({ id: 1, children: [{ id: 2 }] }, [{ id: 2 }])
    expect(result).toEqual({ id: 1, children: [{ id: 2 }] })
  })

  it('should return expected data in case 5', () => {
    const result = mergeChildren({ id: 1, children: [{ id: 2 }, { id: 1 }] }, [{ id: 2 }, { id: 3 }])
    expect(result).toEqual({ id: 1, children: [{ id: 2 }, { id: 1 }, { id: 3 }] })
  })
})
