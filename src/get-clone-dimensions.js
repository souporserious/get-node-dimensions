import getMargin from './get-margin'

export default function getCloneDimensions(node, options) {
  const parentNode = options.actual ? document.body : node.parentNode
  const context = document.createElement('div')
  const clone = node.cloneNode(true)
  const style = getComputedStyle(node)
  let rect, width, height, margin

  // `actual` option need if element must be exact copy =0
  if (!options.actual) {
    // give the node some context to measure off of
    // no height and hidden overflow hide node copy
    context.style.height = 0
    context.style.overflow = 'hidden'

    // clean up any attributes that might cause a conflict with the actual node
    // i.e. inputs that should focus or submit data
    clone.setAttribute('id', '')
    clone.setAttribute('name', '')
  } else {
    context.style.visibility = 'hidden'
    context.style.zIndex = '-1'
  }

  // set props to get a true dimension calculation
  if (options.display || (style && style.getPropertyValue('display') === 'none')) {
    clone.style.display = options.display || 'block'
  }
  if (options.position || options.actual) {
    clone.style.position = options.position || 'absolute'
  }
  if (options.width || (style && !parseInt(style.getPropertyValue('width')))) {
    clone.style.width = options.width || 'auto'
  }
  if (options.height || (style && !parseInt(style.getPropertyValue('height')))) {
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
    rect: {
      width,
      height,
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      left: rect.left
    },
    margin: getMargin(style)
  }
}
