const express=require("express")
const {ProductModel}=require("../model/product.model")
const {UserModel}=require("../model/user.model")
const {OrderModel}=require("../model/order.model")
const jwt=require("jsonwebtoken")
const adminRouter=express.Router()


adminRouter.post("/add",async(req,res)=>{
    const token=req.headers.authorization;
    const decoded = jwt.verify(token, 'masai');
    payload=req.body;
    try{
        if(decoded){
            let user=new ProductModel(payload)
            await user.save()
            res.status(200).send({msg:"product added successfully"})
        }else{
            res.status(400).send({msg:"please login first"})
        }
        

    }catch(err){
        res.status(400).send({msg:err})
    }
})

adminRouter.get("/",async(req,res)=>{
    const token=req.headers.authorization;
    const decoded = jwt.verify(token, 'masai');
    try{
        if(decoded){
            let user=await ProductModel.find()
            res.status(200).send(user)
        }else{
            res.status(400).send({msg:"please login first"})
        }
        

    }catch(err){
        res.status(400).send({msg:err})
    }
})

adminRouter.patch("/update/:productID",async(req,res)=>{
    const token=req.headers.authorization;
    const decoded = jwt.verify(token, 'masai');
    const {image,title,rating,offer,price,maxprice,discount,delivery,view,category}=req.body;
    const {productID}=req.params;
    try{
        if(decoded){
            if(image){
                await ProductModel.findByIdAndUpdate({_id:productID},{image})
                res.status(200).send({msg:"image updated successfully"})
            }else if(title){
                await ProductModel.findByIdAndUpdate({_id:productID},{title})
                res.status(200).send({msg:"title updated successfully"})
            }else if(rating){
                await ProductModel.findByIdAndUpdate({_id:productID},{rating})
                res.status(200).send({msg:"rating updated successfully"})
            }else if(offer){
                await ProductModel.findByIdAndUpdate({_id:productID},{offer})
                res.status(200).send({msg:"offer updated successfully"})
            }else if(price){
                await ProductModel.findByIdAndUpdate({_id:productID},{price})
                res.status(200).send({msg:"price updated successfully"})
            }else if(maxprice){
                await ProductModel.findByIdAndUpdate({_id:productID},{maxprice})
                res.status(200).send({msg:"maxprice updated successfully"})
            }else if(discount){
                await ProductModel.findByIdAndUpdate({_id:productID},{discount})
                res.status(200).send({msg:"discount updated successfully"})
            }else if(delivery){
                await ProductModel.findByIdAndUpdate({_id:productID},{delivery})
                res.status(200).send({msg:"delivery updated successfully"})
            }else if(view){
                await ProductModel.findByIdAndUpdate({_id:productID},{view})
                res.status(200).send({msg:"view updated successfully"})
            }else if(category){
                await ProductModel.findByIdAndUpdate({_id:productID},{category})
                res.status(200).send({msg:"category updated successfully"})
            }
        }else{
            res.status(400).send({msg:"please login first"})
        }

    }catch(err){
        res.status(400).send({msg:err})
    }
})

adminRouter.delete("/delete/:productID",async(req,res)=>{
    const token=req.headers.authorization;
    const decoded = jwt.verify(token, 'masai');
    const {productID}=req.params;
    try{
        if(decoded){
            await ProductModel.findByIdAndDelete({_id:productID})
            res.status(200).send({msg:"product deleted successfully"})
        }else{
            res.status(400).send({msg:"please login first"})
        }

    }catch(err){
        res.status(400).send({msg:err})
    }
})

adminRouter.get("/getuser",async(req,res)=>{
    const token=req.headers.authorization;
    const decoded = jwt.verify(token, 'masai');
    try{
        if(decoded){
            let user=await UserModel.find()
            res.status(200).send(user)
        }else{
            res.status(400).send({msg:"please login first"})
        }

    }catch(err){
        res.status(400).send({msg:err})
    }
})

adminRouter.delete("/deleteuser/:userID",async(req,res)=>{
    const token=req.headers.authorization;
    const decoded = jwt.verify(token, 'masai');
    const {userID}=req.params;
    try{
        if(decoded){
            await UserModel.findByIdAndDelete({_id:userID})
            res.status(200).send({msg:"user deleted successfully"})
        }else{
            res.status(400).send({msg:"please login first"})
        }

    }catch(err){
        res.status(400).send({msg:err})
    }

})

adminRouter.get("/getorder",async(req,res)=>{
    const token=req.headers.authorization;
    const decoded = jwt.verify(token, 'masai');
    try{
        if(decoded){
            let user=await OrderModel.find()
            res.status(200).send(user)
        }else{
            res.status(400).send({msg:"please login first"})
        }

    }catch(err){
        res.status(400).send({msg:err})
    }
})

adminRouter.delete("/deleteorder/:orderID",async(req,res)=>{
    const token=req.headers.authorization;
    const decoded = jwt.verify(token, 'masai');
    const {orderID}=req.params;
    try{
        if(decoded){
            await OrderModel.findByIdAndDelete({_id:orderID})
            res.status(200).send({msg:"order deleted successfully"})
        }else{
            res.status(400).send({msg:"please login first"})
        }

    }catch(err){
        res.status(400).send({msg:err})
    }

})





//get user
//delete user
//get order
//delete order
//testing

module.exports={adminRouter}

