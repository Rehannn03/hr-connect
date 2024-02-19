import {User} from '../model/users.model.js'
import { asyncHandler } from '../Utils/asyncHandler.js' 
import {ApiError} from '../Utils/apiError.js'
import { ApiResponse } from '../Utils/apiResponse.js'

const loginUser= asyncHandler(async(req,res)=>{
    //Take username and password from the request body
    //Check if the user exists
    //If the user exists, check if the password is correct
    //If the password is correct, generate a token
    //Send the token to the user
    const {username,password,role}=req.body
    const user = await User.findOne({username}) 
    if(!user){
        throw new ApiError(404,'User not found')
    }
    
    if(user.role!==role){
        throw new ApiError(400,'Invalid Access')
    }

    const checkPassword=await user.isPasswordCorrect(password)

    if(!checkPassword){
        throw new ApiError(400,'Invalid password')
    }
    let token
    try {
         token=user.generateAccessToken()
        
    } catch (error) {
        console.log(error)
    }

    const options={
        httpOnly:true,
        secure:true,
        sameSite:'None',
        domain:'localhost',
    }
    return res
    .status(200)
    .cookie("accessToken",token,options)
    .json(
        new ApiResponse(
            200,
            {
                user:token,
                role
            },
            "User Logged in Successfully"
        )
    )
})

const logoutUser=asyncHandler(async(req,res)=>{
    res.clearCookie('accessToken')
    return res.status(200).json(
        new ApiResponse(
            200,
            {},
            "User Logged out Successfully"
        )
    )
})

const changePassword=asyncHandler(async(req,res)=>{
    const {newPassword,confirmPassword}=req.body

    if(newPassword!==confirmPassword){
        throw new ApiError(400,'Passwords do not match')
    }

    const user=await User.findByIdAndUpdate(
        req.user._id,
        {
            password:newPassword
        },
        {
            new:true
        }
    )

    return res.stats(200).json(
        new ApiResponse(
            200,
            {
                user
            },
            "Password Changed Successfully"
        )
    )

})

const getUser=asyncHandler((req,res)=>{
    return res.status(200).json(
        new ApiResponse(
            200,
            {
                user:req.user
            },
            "User Fetched Successfully"
        )
    )
})

export {loginUser,logoutUser,changePassword,getUser} 