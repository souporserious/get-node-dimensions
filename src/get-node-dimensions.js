import getCloneDimensions from './get-clone-dimensions'
import getMargin from './get-margin'

export default function getNodeDimensions(node, options = {}) {
  let rect = node.getBoundingClientRect()
  let width, height, margin

  // determine if we need to clone the element to get proper dimensions or not
  if (!rect.width || !rect.height || options.clone) {
    const cloneDimensions = getCloneDimensions(node, options)
    rect = cloneDimensions.rect
    margin = cloneDimensions.margin
  }
  // if no cloning needed, we need to determine if margin should be accounted for
  else if (options.margin) {
    margin = getMargin(getComputedStyle(node))
  }

  // include margin in width/height calculation if desired
  if (options.margin) {
    width = margin.left + rect.width + margin.right
    height = margin.top + rect.height + margin.bottom
  } else {
    width = rect.width
    height = rect.height
  }

  return {
    width,
    height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left
  }
}
