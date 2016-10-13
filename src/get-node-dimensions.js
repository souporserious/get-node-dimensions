import getCloneDimensions from './get-clone-dimensions'

export default function getNodeDimensions(node, options = {}) {
  let rect = node.getBoundingClientRect()

  if (!rect.width || !rect.height || options.clone) {
    rect = getCloneDimensions(node, options)
  }

  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
  }
}
