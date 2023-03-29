const express=require("express")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const {UserModel}=require("../model/user.model")

const userRouter=express.Router()

userRouter.post("/register",async(req,res)=>{
    const {email,password,firstname,lastname}=req.body;
    try{
        bcrypt.hash(password,5,async(err, hash)=> {
            if(hash){
                let user=new UserModel({email,password:hash,firstname,lastname})
                await user.save()
                res.status(200).send({msg:"User register successfully!"})
            }else{
                res.status(400).send({msg:"register failed!"})
            }
        });

    }catch(err){
        res.status(400).send({msg:err})
    }

})

userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    let user=await UserModel.findOne({email})
    try{
        if(user){
            bcrypt.compare(password,user.password,async(err, result)=> {
                if(result){
                    res.status(200).send({msg:"user login successfully!",token:jwt.sign({"userID":user._id}, 'masai')})
                }else{
                    res.status(400).send({msg:"login failed, Please try again"})
                }
            });
        }
    }catch(err){
        res.status(400).send({"msg":err})
    }
})

module.exports={userRouter}

