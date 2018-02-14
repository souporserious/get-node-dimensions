const toNumber = n => parseInt(n) || 0

export default function getMargin(style) {
  return {
    top: style ? toNumber(style.marginTop) : 0,
    right: style ? toNumber(style.marginRight) : 0,
    bottom: style ? toNumber(style.marginBottom) : 0,
    left: style ? toNumber(style.marginLeft) : 0
  }
}
