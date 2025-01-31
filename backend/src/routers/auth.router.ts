import { Router } from "express";
import { signin, signup, me } from "../controllers/auth.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router()

router.route('/signup').post(signup)

router.route('/signin').post(signin)

router.route('/me').get(authMiddleware, me)

export default router