import {Router} from 'express'
import userContrller from '../controllers/user.controller.js';
import validUser from '../controllers/validUser.controller.js';

const router = Router();

router.post("/register", userContrller);
router.post("/validUser", validUser)

export default router
