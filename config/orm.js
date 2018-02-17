const connection = require("./connection.js");

let orm = {
    selectAll: function(whatToSelect, tableInput) {
      var queryString = "SELECT ?? FROM ??";
      connection.query(queryString, [whatToSelect, tableInput], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    insertOne: function(whatToSelect, tableInput) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [whatToSelect, tableInput], function(err, result) {
          if (err) throw err;
          console.log(result);
        });
    },
    updateOne: function(whatToSelect, tableInput) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [whatToSelect, tableInput], function(err, result) {
          if (err) throw err;
          console.log(result);
        });
    },
};

module.exports = orm;