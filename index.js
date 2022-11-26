import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';
import fileUpload from 'express-fileupload';

const PORT = process.env.PORT | 5000;
const DB_URL = process.env.DB_URL;

const app = express();

app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload({}));
app.use('/api', router);

async function startApp() {
   try {
      await mongoose.connect(DB_URL, {
         useUnifiedTopology: true,
         useNewUrlParser: true,
      });
      app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT));
   } catch (error) {
      console.log(error);
   }
}

startApp();
