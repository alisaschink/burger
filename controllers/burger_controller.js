// dependencies
var express = require('express');
var router = express.Router();

// import burger model
var burger = require("../models/burgers.js");

// routes

router.get("/new", function(req, res) {
  res.render("burgers");
});

router.post("/create", function(req, res) {
  var cols = ['burger_name', 'devoured'];
  var vals = [req.body.name, req.body.devoured];

  burger.create(cols, vals, function(response){
    res.redirect('/burgers');
  });
});

// export routes for server.js to use.
module.exports = router;
