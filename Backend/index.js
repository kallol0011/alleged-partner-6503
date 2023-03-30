const express=require("express")
const cors=require("cors")
require("dotenv").config()
const {connection}=require("./db")
const {productRouter}=require("./routes/product.routes")
const {userRouter}=require("./routes/user.routes")
const {cartRouter}=require("./routes/cart.routes")
const {auth}=require("./middleware/auth.middleware")
const {orderRouter}=require("./routes/order.routes")
const app=express()

app.use(express.json())
app.use(cors())

app.use("/user",userRouter)
app.use("/product",productRouter)

app.use(auth)
app.use("/cart",cartRouter)
app.use("/order",orderRouter)


app.listen(8080,async()=>{
    try{
        await connection
        console.log("mongoDB connected")
    }catch(err){
        console.log(err)
        console.log("mongoDB not connected")
    }
    console.log(`server is running on port 8080`)
})