'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var defaultOptions = require('./options');

var OPTIONS = {};

var id = function id(item) {
  return item && item[OPTIONS.id];
};
var parentId = function parentId(item) {
  return item && item[OPTIONS.parentId];
};
var childrenKey = function childrenKey() {
  return OPTIONS.children;
};

var hasParent = function hasParent(parentId, items) {
  return items.some(function (item) {
    return id(item) === parentId;
  });
};

var hasChildren = function hasChildren(item) {
  var key = childrenKey();
  return item && item[key] && item[key].length;
};

var getParents = function getParents(items) {
  return items.filter(function (item) {
    return !hasParent(parentId(item), items);
  });
};

var getChildren = function getChildren(child, items) {
  var childId = id(child);
  return childId ? items.filter(function (item) {
    return parentId(item) === childId;
  }) : [];
};

var getParentChildren = function getParentChildren(parent) {
  var key = childrenKey();
  return Array.isArray(parent[key]) ? parent[key].slice() : [];
};

var mergeChildren = function mergeChildren(parent, children) {
  var parentChildren = getParentChildren(parent);
  parent[childrenKey()] = parentChildren.concat(children);
};

var mergeOptionsBeforeCreateHierarchy = function mergeOptionsBeforeCreateHierarchy() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  OPTIONS = _extends({}, defaultOptions, options);
};

var createHierarchy = function createHierarchy(method) {
  return function (array, options) {
    if (array && array.length) {
      mergeOptionsBeforeCreateHierarchy(options);
      return method(array, null, OPTIONS);
    }
  };
};

module.exports = { getParents: getParents, getChildren: getChildren, mergeChildren: mergeChildren, createHierarchy: createHierarchy, hasChildren: hasChildren, childrenKey: childrenKey };