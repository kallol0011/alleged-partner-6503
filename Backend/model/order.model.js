const mongoose=require("mongoose")


const orderSchema=mongoose.Schema({
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
    userID:String,
    quantity:Number,
    time:String,
    date:String
},{
    versionKey:false
})

const OrderModel=mongoose.model("order",orderSchema)

module.exports={OrderModel}