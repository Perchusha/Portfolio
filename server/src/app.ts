import express from 'express';
import morgan from 'morgan';
import mongoConnect from './utils/mongo';
import cors from 'cors';
import userRoutes from './api/routes/users';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
mongoConnect();

app.use('/users', cors(), userRoutes);

export default app;
