import http from 'http';
require('dotenv').config();
import app from './app';

const server = http.createServer(app);
server.listen(process.env.PORT || 8081);
