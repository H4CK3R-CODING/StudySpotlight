import express from 'express'
import dotenv from 'dotenv'

const app = express()
dotenv.config();

const PORT = process.env.PORT;

app.use("/",()=>{
    console.log("hello");
})


app.listen(PORT,()=>{
    console.log(`The Server is running on port ${PORT}`);
})