const express=require("express")
const {ProductModel}=require("../model/product.model")
const productRouter=express.Router()


//get product for product page
productRouter.get("/",async(req,res)=>{
    const payload=req.query
    try{
        let product=await ProductModel.find(payload)
        res.status(200).send(product)

    }catch(err){
        res.status(400).send(err)
    }
})

//search product product page
productRouter.get("/filter",async(req,res)=>{
    const {product}=req.query;
    //console.log(product)
    const queryObject={}

    if(product){
        queryObject.category={$regex: product, $options:"i"}
    }
    try{
        const data=await ProductModel.find(queryObject)
        res.status(200).send(data)
    }catch(err){
        res.status(400).send({"msg":err.message})
    }
})

//singalproduct page
productRouter.get("/singleproduct/:productID",async(req,res)=>{
    const {productID}=req.params;
    try{
        const user=await ProductModel.findOne({_id:productID})
        res.status(200).send(user)

    }catch(err){
        res.status(400).send({"msg":err.message})
    }

})


module.exports={productRouter}