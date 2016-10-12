import getNodeDimensions from '../src/get-node-dimensions'

const textNode = document.createElement('div')
textNode.innerHTML = 'node text'
document.body.appendChild(textNode)

const hiddenNode = document.createElement('div')
hiddenNode.innerHTML = 'node text'
hiddenNode.style.display = 'none'
document.body.appendChild(hiddenNode)

const flexNode = document.createElement('div')
flexNode.style.display = 'flex'
const flexNodeChild = document.createElement('div')
flexNodeChild.innerHTML = 'node text'
flexNode.appendChild(flexNodeChild)
flexNode.appendChild(flexNodeChild.cloneNode(true))
flexNode.appendChild(flexNodeChild.cloneNode(true))
document.body.appendChild(flexNode)

const changingNode = document.createElement('div')
changingNode.style.width = '300px'
changingNode.style.height = '300px'
changingNode.style.position = 'relative'
document.body.appendChild(changingNode)

describe('get proper node dimensions', () => {
  it('width should equal node offset width', () => {
    const { width } = getNodeDimensions(textNode)
    expect(width).toEqual(textNode.offsetWidth)
  });

  it('when element is hidden', () => {
    const { width, height } = getNodeDimensions(hiddenNode)
    hiddenNode.style.display = 'block'
    expect(width).toEqual(hiddenNode.offsetWidth)
    expect(height).toEqual(hiddenNode.offsetHeight)
  });

  it('when element is display flex and uses clone', () => {
    const { width, height } = getNodeDimensions(flexNode, true)
    expect(width).toEqual(flexNode.offsetWidth)
    expect(height).toEqual(flexNode.offsetHeight)
  });

  it('when element dimensions change', () => {
    const preDimensions = getNodeDimensions(changingNode)
    expect(preDimensions.width).toEqual(300)
    expect(preDimensions.height).toEqual(300)
    changingNode.style.display = 'none'
    changingNode.style.width = '150px'
    changingNode.style.height = '600px'
    changingNode.style.top = '30px'
    changingNode.style.left = '30px'

    const postDimensions = getNodeDimensions(changingNode, { clone: true })
    changingNode.style.display = ''
    expect(postDimensions.width).toEqual(150)
    expect(postDimensions.height).toEqual(600)
    expect(postDimensions.top).toEqual(preDimensions.top + 30)
    expect(postDimensions.left).toEqual(preDimensions.left + 30)
  });
});
