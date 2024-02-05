import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mongoConnect from './utils/mongo';
import routes from './api/routes';
import { errorHandler } from './middlewares/error';

const router = express.Router();
const app = express();

app
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(morgan('dev'))
  .use(cors({ origin: '*' }));

mongoConnect();

app.use('/', routes(router)).use(errorHandler);

export default app;
