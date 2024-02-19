import { User } from "../model/users.model.js"
import { asyncHandler } from "../Utils/asyncHandler.js"
import { ApiError } from "../Utils/apiError.js"
import { ApiResponse } from "../Utils/apiResponse.js"
import uploadOnCloudinary from '../Utils/cloudinary.js'
import { Leave } from "../model/leave.model.js"
const addUser=asyncHandler(async(req,res)=>{
    const {username,password,role,email,phone,address}=req.body
   
    const existingUser=await User.findOne({username})
    //use multer for form data
    if(existingUser){
        throw new ApiError(400,'User already exists')
    }
    // console.log(req.file)
    const imagePath=req.file?.path
    const profilePicture=await uploadOnCloudinary(imagePath)
   
    const user = await User.create({
        username,
        password,
        role,
        email,
        phone,
        address,
        profilePicture:profilePicture.url
    })

    return res.status(201).json(
        new ApiResponse(
            201,
            {
                user
            },
            "User Created Successfully"
        )
    )
})

const viewInfo=asyncHandler(async(req,res)=>{
    const user=await User.findById(req.user._id).select('-password')

    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            {
                user
            },
            "User Info"
        )
    
    )
})

const getLeaves=asyncHandler(async(req,res)=>{
    const leaves=await Leave.find()
    return res.status(200).json(
        new ApiResponse(
            200,
            {
                leaves
            },
            "Leaves"
        )
    )
})

const leaveApplication=asyncHandler(async(req,res)=>{
    const leave = Leave.find()
    const {status}=req.body

    if(status==='approved'){
        leave.status='approved'
    }
    else if(status==='rejected'){
        leave.status='rejected'
    }
    



})
export {
    addUser,
    viewInfo,
    getLeaves,
}