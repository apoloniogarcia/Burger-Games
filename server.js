const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

let app = express();

const port = 3000;

// MySQL DB Connection Information (remember to change this with our specific credentials)
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "apple2003",
    database: "burgers_db"
  });
  
  // Initiate MySQL Connection.
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

// Initiate the listener.
app.listen(port);