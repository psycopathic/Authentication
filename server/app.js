import express from 'express';
import connectionDB from './db/conn.js'
import router from './routes/router.js';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

const app = express();
const port = 3001;

// app.get('/', (req, res) => {
//     res.status(200).send('Hello World!');
// })

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(router);

connectionDB();

app.listen(port, () => {
    console.log(`Example app listening at ${port}`)
})