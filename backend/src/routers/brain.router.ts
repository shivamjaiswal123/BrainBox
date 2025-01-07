import { Router } from "express";
import { createShareableLink, getBrain } from "../controllers/brain.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router()

router.route('/share').post(authMiddleware, createShareableLink)

router.route('/:shareLink').get(getBrain)

export default router