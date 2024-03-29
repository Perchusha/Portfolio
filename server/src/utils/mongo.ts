import mongoose from 'mongoose';

const mongoConnect = () => {
  try {
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
  } catch (error) {
    console.error(error);
  }
};

export default mongoConnect;
