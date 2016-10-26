const toNumber = n => parseInt(n) || 0

export default function getMargin(style) {
  return {
    top: toNumber(style.marginTop),
    right: toNumber(style.marginRight),
    bottom: toNumber(style.marginBottom),
    left: toNumber(style.marginLeft)
  }
}
