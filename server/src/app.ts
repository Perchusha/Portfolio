import express from 'express';
import morgan from 'morgan';
import mongoConnect from './utils/mongo';
import cors from 'cors';

import userRoutes from './api/routes/users';
import sseRoutes from './api/routes/sse';

const app = express();

app
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(morgan('dev'))
  .use(cors({ origin: '*' }));

mongoConnect();

app.use('/users', userRoutes).use('/sse', sseRoutes);

export default app;
