import { loginUser,logoutUser, changePassword } from "../controllers/user.controller.js";
import { makeUser } from "../controllers/admin.controller.js";}
import {Router} from 'express'
import { upload } from "../middleware/multer.middleware.js";
import verifyJWT from "../middleware/auth.midleware.js";
const router = Router()

router.post('/register',upload.single('profilePicture'),makeUser)
router.post('/login',upload.none(),loginUser)
router.post('/logout',verifyJWT,logoutUser)
router.post('/change-password',verifyJWT,changePassword)

export default router