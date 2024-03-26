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
    const leaves=await Leave.aggregate([
        
            {
              $lookup: {
                from: "users", 
                localField: "employee", 
                foreignField: "_id", 
                as: "employeeDetails"
              }
            },
            {
              $unwind: "$employeeDetails" 
            },
            {
              $project: {
                _id: 1, 
                "employeeDetails.username": 1, 
                leaveType: 1,
                fromDate: 1,
                toDate: 1,
                status: 1,
                createdAt: 1,
                updatedAt: 1,
              }
            }
          
    ])
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

const leaveApplicationStatus=asyncHandler(async(req,res)=>{
    const {status}=req.body
    const leaveId=req.params.id
    const leave=await Leave.findByIdAndUpdate(
        leaveId,
        {
            status:status
        },
        {
            new:true
        }
    )
    
    return res.status(200).json(
        new ApiResponse(
            200,
            {
                leave
            },
            "Leave Status Updated"
        )
    )



})
export {
    addUser,
    viewInfo,
    getLeaves,
    leaveApplicationStatus
}