import { addUser,viewInfo,getLeaves } from "../controllers/admin.controller.js";
import { Router } from 'express';
import verifyJWT from "../middleware/auth.midleware.js";

const router =Router()

router.get('/leaves',getLeaves)

export default router
