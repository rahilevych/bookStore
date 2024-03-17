import { PORT } from '../backend/config/serverConfig.js';
import mongoDBURL from '../backend/config/dbConfig.js';
import express, { response } from 'express';
import mongoose from 'mongoose';
import booksRouter from './routes/booksRoutes.js';

const app = express();

app.use(express.json());
app.use('/books', booksRouter);

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
