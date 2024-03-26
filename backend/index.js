import { PORT } from '../backend/config/serverConfig.js';
import mongoDBURL from '../backend/config/dbConfig.js';
import express, { response } from 'express';
import mongoose from 'mongoose';
import booksRouter from './routes/booksRoutes.js';
import categoriesRouter from './routes/categoryRoutes.js';
import cors from 'cors';
const app = express();

/*const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Content-Length', 'Authorization'],
  optionSuccessStatus: 200,
};*/

app.use(express.json());

app.use(cors());

app.use('/books', booksRouter);
app.use('/categories', categoriesRouter);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log(`App is listerning to port:${PORT}`);
    app.listen(PORT, () => {
      console.log(`App is listerning to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
