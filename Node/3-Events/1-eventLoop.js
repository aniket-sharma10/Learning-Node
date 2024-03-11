const {readFile} = require('fs')

console.log('starting task (1)')

readFile('./content.txt', 'utf-8', (err, data) => {
    if(err) console.log(err)

    console.log(data)
    console.log('Read file successfully (2)')
})

console.log('Ending task (3)')