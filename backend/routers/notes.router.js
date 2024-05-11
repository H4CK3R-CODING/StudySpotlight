import {Router} from 'express'
import getSub from '../controllers/getSub.controller.js';
import protectRoutes from '../middlewares/protectRoutes.js';

const notes = Router();

notes.post("/getSub",protectRoutes, getSub);


export default notes
