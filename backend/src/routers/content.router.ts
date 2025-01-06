import { Router } from "express";
import { addNewContent, deleteContent, getAllContent } from "../controllers/content.controller";

const router = Router()

router.route('/').post(addNewContent).get(getAllContent).delete(deleteContent)

export default router