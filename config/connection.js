// set up MySQL connection.
var mysql = require("mysql");
var app = require('../server');

if (app.settings.env == 'development'){
  var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers_db"
});
} else {
  var connection = mysql.createConnection(process.env.JAWSDB_URL);
}


// make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// export connection
module.exports = connection;