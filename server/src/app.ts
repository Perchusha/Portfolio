import express from 'express';
import cors from 'cors';
import userRoutes from './api/routes/users';

const app = express();
app.use(express.json());

app.use('/users', cors(), userRoutes);

export default app;
