const os = require('os')

// info about current user
// console.log(os.userInfo())

// system uptime
// console.log(os.uptime())

const currentOs = {
    name: os.type(),
    release: os.release(),
    Memory: os.totalmem(),
    freeMemory: os.freemem()
}

console.log(currentOs)