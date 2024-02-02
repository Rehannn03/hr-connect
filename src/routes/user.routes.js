import { makeUser,loginUser } from "../controllers/user.controller.js";
import {Router} from 'express'
const router = Router()

router.post('/register',makeUser)
router.post('/login',loginUser)

export default router