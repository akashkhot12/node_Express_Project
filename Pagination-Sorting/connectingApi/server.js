const express = require("express");
const app  = express();
const course = require("./routes/routes")
const routes = require("./routes/routes")

app.use(express.json())

app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

})

app.use('/course',routes)

app.listen(5000,()=>{
    console.log("server is live");
})