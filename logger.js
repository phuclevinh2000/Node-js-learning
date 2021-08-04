const EventEmitter = require('events')
const uuid = require('uuid');

// console.log(uuid.v4())   generate id

class Logger extends EventEmitter {
    log(msg) {
        //Call event
        this.emit('message', {id: uuid.v4(), msg})
    }
}

const Logger = require('./logger')

const logger = new Logger();

logger.on('message', (data) => console.log('Called Listener', data))

logger.log('hello world')