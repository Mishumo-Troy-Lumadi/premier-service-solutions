var io

module.exports = {
    set: (server) => {
        io = require('socket.io')(server, { cors: ['*'] })
        console.log('Socket Created')
    },
    get: () => {
        return io
    }
}