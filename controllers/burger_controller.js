// dependencies
var express = require('express');
var router = express.Router();

// import burger model
var burger = require("../models/burgers.js");

// routes
// get route for all burgers
router.get("/", function(req, res) {
  burger.all(function(data){
    res.render('index', {burgers: data})
  });
});


// router.post("/create", function(req, res) {
//   // var cols = ['burger_name', 'devoured'];
//   // var vals = [req.body.name, req.body.devoured];

//   // burger.create(cols, vals, function(response){
//   //   res.redirect('/index');
//   // });
// });

// export routes for server.js to use.
module.exports = router;
