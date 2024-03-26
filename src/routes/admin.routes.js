import { addUser,viewInfo,getLeaves,leaveApplicationStatus} from "../controllers/admin.controller.js";
import { Router } from 'express';
import verifyJWT from "../middleware/auth.midleware.js";

const router =Router()
router.post('/register',addUser)
router.get('/leaves',getLeaves)
router.patch('/leaves/application/:id',verifyJWT,leaveApplicationStatus)

export default router
