import { asyncHandler } from "../Utils/asyncHandler.js";
import { ApiError } from "../Utils/apiError.js";
import { ApiResponse } from "../Utils/apiResponse.js";
import { Leave } from "../model/leave.model.js";
const applyForLeave=asyncHandler(async(req,res)=>{
    const {fromDate,toDate,leaveType}=req.body
    const employee=req.user._id
    const status='pending'
    const leave=await Leave.create({
        employee,
        fromDate,
        toDate,
        leaveType,
        status
    })
    return res.status(201).json(
        new ApiResponse(
            201,
            {
                leave
            },
            "Leave Applied Successfully"
        )
    )
})

export{
    applyForLeave
}