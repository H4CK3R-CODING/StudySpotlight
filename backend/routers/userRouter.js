import {Router} from 'express'
import userContrller from '../controllers/user.controller.js';

const router = Router();

const userRouter = router.post("/register", userContrller);

export default userRouter
