const express = require("express");
const app = express();
const apiRoutes = require("./routes");
const PORT = 5000;
const { sequelize, connectToDB } = require("./db");
const body_parser = require("body-parser");

app.use(express.json());

app.use("/api", apiRoutes);

app.use((req, res) => {
  res.status(404);
  res.json({ message: "Resourse not found" });
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "hello world" });
});

app.listen(PORT, async () => {
  console.log("server is started on port " + PORT);
  await connectToDB();
});
