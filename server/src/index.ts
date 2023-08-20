import http from 'http';
import app from './app';

require('dotenv').config();

const server = http.createServer(app);
server.listen(process.env.PORT || 8081);
