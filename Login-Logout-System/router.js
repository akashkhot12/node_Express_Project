var express = require("express");
var router = express.Router();

const credetials = {
  email: "admin@gmail.com",
  password: "admin@12345",
};

// login user

router.post("/login", (req, res) => {
  if (
    (req.body.email =
      credetials.email && req.body.password == credetials.password)
  ) {
    req.session.user = req.body.email;
    res.redirect("/route/dashboard");
    // res.end("login successfull")
  } else {
    res.end("invalid username");
  }
});

// routes for dashboards

router.get("/dashboard", (req, res) => {
  if (req.session.user) {
    res.render("dashboard", { user: req.session.user });
  } else {
    res.send("Unauthorize User");
  }
});

// routes for loagout
router.get("/logout", (req, res) => {
  req.session.destroy(function (err) {
    if (err) {
      console.log(err);
      res.send("Error");
    } else {
      res.render("base", {
        title: "Express",
        logout: "logout Successfully..!",
      });
    }
  });
});

module.exports = router;
