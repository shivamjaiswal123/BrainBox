import { Router } from "express";
import { createShareableLink, getBrain } from "../controllers/brain.controller";

const router = Router()

router.route('/share').post(createShareableLink)

router.route('/:shareLink').get(getBrain)

export default router