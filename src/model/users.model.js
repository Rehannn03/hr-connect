import mongoose,{Schema} from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'
const userSchema=new Schema({
    username:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    role:{
        type:String,
        require:true,
        enum:['admin','employee']
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    department:{
        type:String,
        require:true
    },
    designation:{
        type:String,
        require:true
    },
    currentSalary:{
        type:Number,
        require:true
    },
    profilePicture:{
        type:String,
    }
    },{timestamps:true})


userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        return next()
    }
    
    this.password=await bcrypt.hash(this.password,10)
    next()
})

userSchema.methods.isPasswordCorrect=async function(password){
    return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken=function(){
    return jwt.sign(
        {
            _id:this._id,
            username:this.username
        },
        process.env.JWT_SECRET,
        {
            expiresIn:process.env.JWT_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken=function(){
    return jwt.sign(
        {
            _id:this._id
        },
        process.env.JWT_REFRESH_SECRET,
        {
            expiresIn:process.env.REFRESH_EXPIRY
        }
    )

}

export  const User=mongoose.model('User',userSchema)