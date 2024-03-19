import { PORT } from '../backend/config/serverConfig.js';
import mongoDBURL from '../backend/config/dbConfig.js';
import express, { response } from 'express';
import mongoose from 'mongoose';
import booksRouter from './routes/booksRoutes.js';
import categoriesRouter from './routes/categoryRoutes.js';

const app = express();

app.use(express.json());
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
