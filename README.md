## get-node-dimensions

[![npm version](https://badge.fury.io/js/get-node-dimensions.svg)](https://badge.fury.io/js/get-node-dimensions)

Get accurate element dimensions, even if it's hidden!

## Usage

`npm install get-node-dimensions --save`

`bower install get-node-dimensions --save`

### Example

```js
import getNodeDimensions from 'get-node-dimensions'

const div = document.getElementById('div-to-measure')
getNodeDimensions(div) // { width, height, top, right, bottom, left }
```
