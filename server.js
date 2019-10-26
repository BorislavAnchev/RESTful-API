const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3001;

const server = http.createServer(app); // Here we must add a listener to listen for requests.

server.listen(port);