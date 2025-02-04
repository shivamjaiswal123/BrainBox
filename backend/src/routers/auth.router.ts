import { Router } from "express";
import { signin, signup, me, logout } from "../controllers/auth.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router()

router.route('/signup').post(signup)

router.route('/signin').post(signin)

router.route('/me').get(authMiddleware, me)

router.route('/logout').post(logout)

export default router