const express = require("express");
const app = express();
const apiRoutes = require("./routes");
const PORT = 5000;
const { sequelize, connectToDB } = require("./db");


app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "hello world" });
});

app.listen(PORT, async () => {
  console.log("server is started on port " + PORT);
  await connectToDB();
});
