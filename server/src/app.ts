import express from 'express';
import morgan from 'morgan';
import mongoConnect from './utils/mongo';
import cors from 'cors';

import userRoutes from './api/routes/users';
import sseRoutes from './api/routes/sse';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors({ origin: '*' }));
mongoConnect();

app.use('/users', userRoutes);
app.use('/sse', sseRoutes);

export default app;
