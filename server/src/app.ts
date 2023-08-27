import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import userRoutes from './api/routes/users';

const app = express();

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_TABLENAME}.92tl9gn.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log('MongoDB connection established!');
  })
  .catch(err => {
    console.error('MongoDB is not connected. ', err);
  });
mongoose.Promise = global.Promise;

app.use(express.json());
app.use(morgan('dev'));

app.use('/users', cors(), userRoutes);

export default app;
