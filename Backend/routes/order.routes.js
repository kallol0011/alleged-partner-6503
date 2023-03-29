const express=require("express")
const jwt=require("jsonwebtoken")
const {OrderModel}=require("../model/order.model")

const orderRouter=express.Router()

orderRouter.post("/add",async(req,res)=>{
    const token=req.headers.authorization;
    const decoded = jwt.verify(token, 'masai');
    payload=req.body;
    try{
        if(decoded){
            //add array
            await OrderModel.insertMany(payload)
            res.status(200).send({msg:"product added in order successfully"})
        }else{
            res.status(400).send({msg:"Please login first!"})
        }

    }catch(err){
        res.status(400).send({msg:err})
    }
})

orderRouter.get("/",async(req,res)=>{
    const token=req.headers.authorization;
    const decoded = jwt.verify(token, 'masai');
    try{
        if(decoded){
            let user=await OrderModel.find({userID:decoded.userID})
            res.status(200).send(user)
        }else{
            res.status(400).send({msg:"please Login first!"})
        }
    }catch(err){
        res.status(400).send({msg:err})
    }
})

module.exports={orderRouter}