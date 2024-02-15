const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const secreteKey = "secreteKey";

app.get("/", (req, res) => {
  res.json({
    message: "a simple api",
  });
});

app.post("/login", (req, res) => {
  const user = {
    id: 1,
    username: "anil",
    email: "anil@gmail.com",
  };
  jwt.sign({ user }, secreteKey, { expiresIn: "300s" }, (err, token) => {
    res.json({
      token,
    });
  });
});

app.post("/profile", verifyingToken, (req, res) => {
  jwt.verify(req.token, secreteKey, (err, authdata) => {
    if (err) {
      res.send({
        result: "invalid token",
      });
    } else {
      res.json({
        message: "profile accessed",
        authdata,
      });
    }
  });
});

function verifyingToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== undefined) {
    const bearer = bearerHeader.split(" ");
    const token = bearer[1];
    req.token = token;
    next();
  } else {
    res.send({
      result: "token is not valid",
    });
  }
}

app.listen(8000, () => {
  console.log("sserver is start");
});
