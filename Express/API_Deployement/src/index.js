const express = require("express");
const app = express();
const userRouter = require("./Routes/userROutes");
const noteRouter = require("./Routes/notesRoutes");
const mongoose = require("mongoose")
app.use("/users", userRouter);
app.use("/note", noteRouter);

app.get("/", (req, res) => {
  res.send("hello");
});

mongoose.connect("mongodb+srv://akashkhot03:Akash3975@cluster0.ftplmdi.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    app.listen(5000, () => {
        console.log("server is started");
      });
})
.catch((error)=>{

})


