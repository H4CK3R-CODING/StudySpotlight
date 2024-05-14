import { Router } from "express";
import { logout, signin, userContrller } from "../controllers/user.controller.js";
import validUser from "../controllers/validUser.controller.js";
import verifyOtp from "../controllers/verifyOtp.js";

const router = Router();

router.post("/register", userContrller);
router.post("/verify", verifyOtp)
router.post("/validUser", validUser);
router.post("/signin", signin);
router.get("/logout", logout);

export default router;
