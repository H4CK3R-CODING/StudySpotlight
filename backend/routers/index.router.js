import express from 'express'
import notes from './notes.router.js';
import userRouter from './userRouter.js';

const mainRouter = express.Router();

mainRouter.use("/user", userRouter);
mainRouter.use('/notes', notes);

export default mainRouter
