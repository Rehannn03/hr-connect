import { applyForLeave } from "../controllers/employee.controller.js";

import { Router } from 'express';
import verifyJWT from "../middleware/auth.midleware.js";

const router =Router()

router.post('/applyleave',verifyJWT,applyForLeave)

export default router