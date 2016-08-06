import getCloneDimensions from './get-clone-dimensions'

export default function getNodeDimensions(node, options = {}) {
  let rect = node.getBoundingClientRect()
  let width = rect.width
  let height = rect.height

  if (!width || !height || options.clone) {
    rect = getCloneDimensions(node, options)
    width = rect.width
    height = rect.height
  }

  return {
    width,
    height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
  }
}
