const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const User = require("./models/user");
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

User.sync({ force: true });
// User.drop();

app.listen(3000, () => {
  console.log("server is started on port 3000");
});
