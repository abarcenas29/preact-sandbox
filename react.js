// comply with the preact incompatibilities with the react-hot-loader
var preact = require('preact-compat')

var react = {}
// Copy object properties to a new object which will allow react-hot-loader to do its magic
Object.keys(preact).forEach(key => {
  console.log(key)
  react[key] = preact[key]
})

console.log(react,'react')
module.exports = react