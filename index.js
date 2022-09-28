import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import Post from './Post.js';

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

const app = express();

app.use(express.json());

app.post('/', async (req, res) => {
   try {
      const { author, title, content, picture } = req.body;
      const post = await Post.create({ author, title, content, picture });
      res.status(200).json(post);
   } catch (error) {
      res.status(500).json(error);
   }
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
