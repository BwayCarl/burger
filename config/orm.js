const connection = require("./connection.js");


var orm = {
    selectAll: function () {
    var queryString = "SELECT "
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
        if (err) throw err;
        console.log(result);
    });
},

insertOne: function () {
    var queryString = "INSERT "
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
},

updateOne: function () {
    var queryString = "UPDATE "
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
},
}

module.exports = orm;