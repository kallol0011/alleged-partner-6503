const express=require("express")
const cors=require("cors")
require("dotenv").config()
const {connection}=require("./db")
const {productRouter}=require("./routes/product.routes")
const app=express()

app.use(express.json())
app.use(cors())

app.use("/product",productRouter)



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