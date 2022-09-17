import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

const app = express();

app.use(express.json());

app.post('/', (req, res) => {
   console.log(req.body);
   res.status(200).json('SERVER IS WORKING !!!');
});

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
