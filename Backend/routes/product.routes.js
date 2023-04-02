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
    const {category,rating,sort,order,q}=req.query;
    const query={}
    const SortData={}
if(q){
  query.title={$regex: `.*${q}.*`, $options: "$i"}
}
// console.log(query)
    if(sort&&order){
SortData[sort]=order

    }

    if (rating) {
        if (Array.isArray(rating)) {
          if (!query.$or) {
            query.$or = [];
          }
          rating.forEach((el) => {
       query.$or.push({ rating: { $eq: Number(el) } });
          });
        } else {
          query.rating = { $regex: `.*${rating}.*`, $options: "$i" };
        }
      }
      if (category) {
        if (Array.isArray(category)) {
          if (!query.$or) {
            query.$or = [];
          }
          category.forEach((el) => {
            query.$or.push({ category: { $regex: `.*${el}.*`, $options: "$i" } });
          });
        } else {
          query.category = { $regex: `.*${category}.*`, $options: "$i" };
        }
      }
    try{
        const data=await ProductModel.find(query).sort(SortData)
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

//export module

module.exports={productRouter}