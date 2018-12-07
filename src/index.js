const { createHierarchy } = require('./common')
const { createTreeHierarchy } = require('./methods/createTreeHierarchy')
const { createFlatHierarchy } = require('./methods/createFlatHierarchy')

module.exports = {
  createTreeHierarchy: createHierarchy(createTreeHierarchy),
  createFlatHierarchy: createHierarchy(createFlatHierarchy),
}
