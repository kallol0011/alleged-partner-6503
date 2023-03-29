const express=require("express")
const {ProductModel}=require("../model/product.model")
const productRouter=express.Router()

//get product
productRouter.get("/:page",async(req,res)=>{
        const {page}=req.params;
        const payload=req.query
    try{
        let pagination=(page-1)*9
        let product=await ProductModel.find(payload).skip(pagination).limit(9)
        res.status(200).send(product)

    }catch(err){
        res.status(400).send(err)
    }
})

//search product



module.exports={productRouter}