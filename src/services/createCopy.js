const createCopy = (item) => {
  if (!item || typeof item !== 'object') return item

  const accumulator = Array.isArray(item) ? [] : {}
  return iterator(item, accumulator, createCopy)
}

const iterator = (iterable, accumulator, callback) => {
  for (let key in iterable) {
    if (iterable.hasOwnProperty(key)) {
      accumulator[key] = callback(iterable[key])
    }
  }
  return accumulator
}

module.exports = { createCopy, iterator }
