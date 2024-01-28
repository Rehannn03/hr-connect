import User from '../model/users.model.js'
import { asyncHandler } from '../Utils/asyncHandler.js' 
import {ApiError} from '../Utils/apiError.js'
import { ApiResponse } from '../Utils/apiResponse.js'
const loginUser= asyncHandler(async(req,res)=>{
    const {username,password}=req.body

    
})