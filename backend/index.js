import { PORT } from '../backend/config/serverConfig.js';
import mongoDBURL from '../backend/config/dbConfig.js';
import express from 'express';
import mongoose from 'mongoose';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

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
