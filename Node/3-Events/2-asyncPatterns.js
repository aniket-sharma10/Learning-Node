const {readFile} = require('fs')
const util = require('util')

const readPromise = util.promisify(readFile)

const start = async () => {
    try {
        const first = await readPromise('./content.txt', 'utf-8')
        console.log(first)
    } catch (error) {
        console.log(error)
    }
}

start()
console.log('\nTask ended')