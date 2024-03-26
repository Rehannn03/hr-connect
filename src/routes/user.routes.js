import { loginUser,logoutUser, changePassword,getUser } from "../controllers/user.controller.js";
import { addUser } from "../controllers/admin.controller.js";
import {Router} from 'express'
import { upload } from "../middleware/multer.middleware.js";
import verifyJWT from "../middleware/auth.midleware.js";
const router = Router()

router.post('/register',upload.single('profilePicture'),addUser)
router.post('/login',upload.none(),loginUser)
router.get('/logout',verifyJWT,logoutUser)
router.post('/change-password',verifyJWT,changePassword)
router.get('/user',verifyJWT,getUser)




export default router