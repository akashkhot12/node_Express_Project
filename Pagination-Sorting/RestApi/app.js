const express = require("express");

const app = express();

const port = process.env.PORT || 5000

const product_routes = require("./routes/product");

app.get("/",(req,res)=>{
    res.send("hello, i am live");
})

app.use("/api/products",product_routes)

const start = async()=>{
    try {
       app.listen(port,()=>{
        console.log("connected succesfully");
       }) 
    } catch (error) {
        console.log(error)
    }
}
start();