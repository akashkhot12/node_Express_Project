const express = require("express");
const app = express();
const PORT = 9000;

app.get("/", (req, res) => {
  res.send("hello world");
});


app.listen(PORT,()=>{
    console.log(`server is runnig on port http://localhost:${PORT}`);
    
})