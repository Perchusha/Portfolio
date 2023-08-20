import http = require('http');
import app = require('./app');

const port = process.env.PORT || 8081;

const server = http.createServer(app);
server.listen(port);
