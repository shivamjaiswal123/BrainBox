import { Router } from "express";
import { addNewContent, deleteContent, getAllContent } from "../controllers/content.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router()

router.route('/').post(authMiddleware, addNewContent)
                .get(authMiddleware, getAllContent)
                .delete(authMiddleware, deleteContent)

export default router