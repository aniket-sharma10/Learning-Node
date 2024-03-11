const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// listen for event
customEmitter.on('response', () => {
    console.log('data received')
})

// can also access parameters
customEmitter.on('response', (name, id) => {
    console.log('Another response function')
    console.log(`Name:${name}  ID:${id}`)
})

// trigger the event
customEmitter.emit('response', 'Aniket', 88)