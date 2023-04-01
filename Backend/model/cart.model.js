const mongoose=require("mongoose")

const cartSchema=mongoose.Schema({
    image:String,
    title:String,
    rating:Number,
    offer:String,
    price:Number,
    maxprice:Number,
    discount:String,
    delivery:String,
    view:String,
    category:String,
    quantity:Number,
    userID:String
},{
    versionKey:false
})

const CartModel=mongoose.model("cart",cartSchema)

module.exports={CartModel}