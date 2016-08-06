'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = getNodeDimensions;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _getCloneDimensions = require('./get-clone-dimensions');

var _getCloneDimensions2 = _interopRequireDefault(_getCloneDimensions);

function getNodeDimensions(node) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var rect = node.getBoundingClientRect();
  var width = rect.width;
  var height = rect.height;

  if (!width || !height || options.clone) {
    rect = (0, _getCloneDimensions2['default'])(node, options);
    width = rect.width;
    height = rect.height;
  }

  return {
    width: width,
    height: height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left
  };
}

module.exports = exports['default'];