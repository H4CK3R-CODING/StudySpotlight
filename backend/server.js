import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import connectToDB from './db/connectToDB.js';

import mainRouter from './routers/index.router.js';


import path from 'path'

const __dirname = path.resolve();


const app = express()
dotenv.config();
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

app.use("/api/v1/",mainRouter);

// app.use(express.static(path.join(__dirname, "/frontend/dist")));

// app.get("*", (req,res)=>{
//     res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
// })


app.listen(PORT,async ()=>{
    await connectToDB();
    console.log(`The Server is running on port ${PORT}`);
})