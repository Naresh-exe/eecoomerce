import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"
import Product from "./models/product.model.js"
dotenv.config()
const app=express()
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
app.get("/getProducts",(req,res)=>{
        const products=Product.find({}).then((data)=>{
            res.json(data)
        })

})

app.listen(4000,()=>{
    connectDB()
})