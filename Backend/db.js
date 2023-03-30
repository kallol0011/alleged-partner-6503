const mongoose=require("mongoose")
require("dotenv").config()

const connection=mongoose.connect("mongodb+srv://vinaykumar:vinayh@cluster0.dahdsmy.mongodb.net/amazon-web?retryWrites=true&w=majority")

module.exports={connection}