'use strict';

var _require = require('./common'),
    createHierarchy = _require.createHierarchy;

var _require2 = require('./methods/createTreeHierarchy'),
    createTreeHierarchy = _require2.createTreeHierarchy;

var _require3 = require('./methods/createFlatHierarchy'),
    createFlatHierarchy = _require3.createFlatHierarchy;

module.exports = {
  createTreeHierarchy: createHierarchy(createTreeHierarchy),
  createFlatHierarchy: createHierarchy(createFlatHierarchy)
};