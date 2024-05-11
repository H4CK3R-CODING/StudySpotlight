import express from 'express'
import dotenv from 'dotenv'
import connectToDB from './db/connectToDB.js';


import mainRouter from './routers/index.router.js';

const app = express()
dotenv.config();
app.use(express.json());

const PORT = process.env.PORT;

app.use("/api/v1/",mainRouter);

app.use("/",()=>{
    console.log("hello");
})


app.listen(PORT,async ()=>{
    await connectToDB();
    console.log(`The Server is running on port ${PORT}`);
})