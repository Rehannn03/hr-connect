import { asyncHandler } from "../Utils/asyncHandler.js";
import { User } from "../model/users.model.js";
import { ApiError } from "../Utils/apiError.js";
import jwt from 'jsonwebtoken'
const verifyJWT=asyncHandler(async(req,_,next)=>{
    const token=req.cookies?.accessToken
    
    
    if(!token){
        throw new ApiError(401,'Unauthorized Access')
    }

    const decoded=jwt.verify(token,process.env.JWT_SECRET)

    const user=await User.findById(decoded._id).select('-password')

    if(!user){
        throw new ApiError(404,'User not found')
    }

    req.user=user
    next()
})

export default verifyJWT