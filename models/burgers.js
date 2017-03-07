// imports orm.js
var orm = require("../config/orm.js");

// calls orm functions using burger-specific input
var burger = {
 all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
   create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });  
  },
   update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    }); 
  }
};


module.exports = burger;