const express = require("express");
const bodyParser = require("body-parser");
require('./models')
const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

// User.sync({ force: true });
// Contact.sync({ force: true });
// User.drop();
// sequelize.sync({force:true});

app.listen(3000, () => {
  console.log("server is started on port 3000");
});
