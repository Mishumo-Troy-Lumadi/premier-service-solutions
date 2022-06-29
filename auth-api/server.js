const app = require('./app');
const http = require('http');
const dotenv = require('dotenv');
const mongo = require('./helpers/mongodb');

dotenv.config();
mongo();

let port = process.env.PORT || 5000;
let server = http.createServer(app);

server.listen(port, () => {
	console.log(`Server started on port :port`);
});
