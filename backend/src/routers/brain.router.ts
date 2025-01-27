import { Router } from "express";
import { createShareableLink, getBrain, sharingStatus } from "../controllers/brain.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router()

router.route('/share').post(authMiddleware, createShareableLink)

router.route("/sharing-status").get(authMiddleware, sharingStatus)

router.route('/:shareLink').get(getBrain)

export default router