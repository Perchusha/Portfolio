import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import userRoutes from './api/routes/usersDB';
import userRoutesJSON from './api/routes/usersJSON';

const app = express();

// If you want to connect your mongoDB table, create .env file inside ./server folder and add params as below.
// I'm using MongoDB Atlas free plan for learning propose. You can try it from this link:
// https://www.mongodb.com/atlas

const mongoUsername = process.env.MONGO_DB_USER;
const mongoPassword = process.env.MONGO_DB_PASSWORD;
const mongoTable = process.env.MONGO_DB_TABLENAME;

const isAcceptable = mongoUsername && mongoPassword && mongoTable;

if (isAcceptable) {
  mongoose
    .connect(
      `mongodb+srv://${mongoUsername}:${mongoPassword}@${mongoTable}.92tl9gn.mongodb.net/?retryWrites=true&w=majority`
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
