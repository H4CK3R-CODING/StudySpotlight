import {Router} from 'express'
import getSub from '../controllers/getSub.controller.js';

const notes = Router();

notes.post("/getSub", getSub);


export default notes
