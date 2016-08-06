'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = getCloneDimensions;

function getCloneDimensions(node, options) {
  var parentNode = node.parentNode;

  var context = document.createElement('div');
  var clone = node.cloneNode(true);
  var style = getComputedStyle(clone);
  var rect = {};

  // give the node some context to measure off of
  // no height and hidden overflow hide node copy
  context.style.height = 0;
  context.style.overflow = 'hidden';

  // clean up any attributes that might cause a conflict with the original node
  // i.e. inputs that should focus or submit data
  clone.setAttribute('id', '');
  clone.setAttribute('name', '');

  // set props to get a true dimension calculation
  clone.style.display = options.display || style.getPropertyValue('display');
  if (style.getPropertyValue('width') !== '') {
    clone.style.width = 'auto';
  }
  if (style.getPropertyValue('height') !== '') {
    clone.style.height = 'auto';
  }

  // append copy to context
  context.appendChild(clone);

  // append context to DOM so we can measure
  parentNode.appendChild(context);

  // get accurate width and height
  rect = clone.getBoundingClientRect();

  // destroy clone
  parentNode.removeChild(context);

  return rect;
}

module.exports = exports['default'];