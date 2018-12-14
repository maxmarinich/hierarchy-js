'use strict';

var _require = require('../common'),
    getParents = _require.getParents,
    getChildren = _require.getChildren,
    mergeChildren = _require.mergeChildren;

var createTreeHierarchy = function createTreeHierarchy(items, parent) {
  var children = [];

  if (parent) children = getChildren(parent, items);else children = getParents(items);

  if (children.length) {
    parent && mergeChildren(parent, children);
    children.forEach(function (item) {
      return createTreeHierarchy(items, item);
    });
  }
  return children;
};

module.exports = { createTreeHierarchy: createTreeHierarchy };