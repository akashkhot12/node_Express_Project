require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require("./dbConnect");
const app = express();

dbConnect();

app.use(express.json());
app.use(cors());


const port = process.env.PORT||8080;

app.listen(port,()=>{
    console.log(`listening on port ${port}...`);
})