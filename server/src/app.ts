import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import userRoutes from './api/routes/usersDB';
import userRoutesJSON from './api/routes/usersJSON';

const app = express();

const mongoUsername = process.env.MONGO_DB_USER;
const mongoPassword = process.env.MONGO_DB_PASSWORD;

const isAcceptable = mongoUsername && mongoPassword;

if (isAcceptable) {
  mongoose
    .connect(
      `mongodb+srv://${mongoUsername}:${mongoPassword}@node-rest.92tl9gn.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => {
      console.log('MongoDB connection established!');
    })
    .catch(err => {
      console.error('MongoDB is not connected. ', err);
    });
  mongoose.Promise = global.Promise;
}

app.use(express.json());
app.use(morgan('dev'));

app.use('/users', cors(), isAcceptable ? userRoutes : userRoutesJSON);

export default app;
