const path = require('path')

// path seperator
// console.log(path.sep)

// join method
const pathName = path.join('../1-basics', '1-global.js')
// console.log(pathName)

// base name of a path
// console.log(path.basename(pathName))

// resolve method for absolute path
const absolute = path.resolve(__dirname, '../1-basics', '1-global.js')
console.log(absolute)