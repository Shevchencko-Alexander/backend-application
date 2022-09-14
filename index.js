import express from 'express';

const PORT = 5000;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
   res.status(200).json('SERVER IS WORKING !!!');
});

app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT));
