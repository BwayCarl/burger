const orm = require("../config/orm.js")

//Views all burgers
var burger = {
    all: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
   
    // Create a burger on Submit
    create: function(name, cb) {
      orm.insertOne("burgers", 
      [
        "burgerName", "devoured"
      ],
      [
        name, false
      ],
        cb);
      },

    // Moves burger to Devoured List
    update: function(id, cb) {
      var condition = "id=" + id;
      orm.updateOne("burgers", {
        devoured: true
      }, condition, cb);
    }
  };

module.exports = burger;