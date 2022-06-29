const config = require('./config')
const app = require('./app');
const mongodb = require('./helpers/mongodb')

var socket = require('./socket');

mongodb()

const server = require('http').createServer(app);

socket.set(server)

server.listen(config.port, () => {
    console.log(`Server started on port :${config.port}`);
});