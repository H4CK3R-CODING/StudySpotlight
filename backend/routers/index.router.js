import express from 'express'
import notes from './notes.router.js';

const mainRouter = express.Router();

mainRouter.use('/notes', notes);

export default mainRouter
