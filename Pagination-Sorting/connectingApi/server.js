const express = require("express");
const app  = express();
const routes = require("./routes/routes")

app.use(express.json())


app.use('/app/data',routes)

app.listen(5000,()=>{
    console.log("server is live");
})