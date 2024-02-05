import { User } from "../model/users.model"
import { asyncHandler } from "../Utils/asyncHandler.js"
import { ApiError } from "../Utils/apiError.js"
import { ApiResponse } from "../Utils/apiResponse.js"
import uploadOnCloudinary from '../Utils/cloudinary.js'
const makeUser=asyncHandler(async(req,res)=>{
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

export {
    makeUser
}