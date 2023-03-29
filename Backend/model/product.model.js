const mongoose=require("mongoose")

const productSchema=mongoose.Schema({
    image:String,
    title:String,
    rating:Number,
    offer:String,
    price:Number,
    maxprice:Number,
    discount:String,
    delivery:String,
    view:String,
    category:String
},{
    versionKey:false
})

const ProductModel=mongoose.model("product",productSchema)

module.exports={ProductModel}

