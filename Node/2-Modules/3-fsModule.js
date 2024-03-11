// const fs = require('fs')
// fs.readFile

// We can also do that using destructuring
const { writeFileSync, readFileSync, write} = require('fs')

const first  = readFileSync('./Content/first.txt', 'utf-8')
const second  = readFileSync('./Content/second.txt', 'utf-8')

// console.log(first, second)

// writeFileSync
// writeFileSync('./Content/result.txt', `Overwrites previous(text if any) otherwise create a new file. This is combination of both files: ${first}, ${second}`)
writeFileSync('./Content/result.txt', `\nThis text will be appeded because of 'a' flag`, {flag: 'a'})