export default function getCloneDimensions(node, options) {
  const { parentNode } = node
  const context = document.createElement('div')
  const clone = node.cloneNode(true)
  const style = getComputedStyle(node)
  let rect, width, height

  // give the node some context to measure off of
  // no height and hidden overflow hide node copy
  context.style.height = 0
  context.style.overflow = 'hidden'

  // clean up any attributes that might cause a conflict with the original node
  // i.e. inputs that should focus or submit data
  clone.setAttribute('id', '')
  clone.setAttribute('name', '')

  // set props to get a true dimension calculation
  if (options.display || style.getPropertyValue('display') === 'none') {
    clone.style.display = options.display || 'block'
  }
  if (options.width || !parseInt(style.getPropertyValue('width'))) {
    clone.style.width = options.width || 'auto'
  }
  if (options.height || !parseInt(style.getPropertyValue('height'))) {
    clone.style.height = options.height || 'auto'
  }

  // append copy to context
  context.appendChild(clone)

  // append context to DOM so we can measure
  parentNode.appendChild(context)

  // get accurate dimensions
  rect = clone.getBoundingClientRect()
  width = clone.offsetWidth
  height = clone.offsetHeight

  // destroy clone
  parentNode.removeChild(context)

  return {
    width,
    height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
  }
}
