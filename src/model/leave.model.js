import mongoose,{Schema} from "mongoose";

const leaveSchema=new Schema({
    employee:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    leaveType:{
        type:String,
        required:true,
    },
    fromDate:{
        type:String,
        required:true
    },
    toDate:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true,
        enum:['pending','approved','rejected'],
        default:'pending'
    }
    },{timestamps:true})


export const Leave=mongoose.model('Leave',leaveSchema)