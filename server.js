const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

const app = express();


let PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var routes = require("./controllers/burgers_controller.js");
app.use(routes);

app.listen(PORT, function() {
    console.log("Listening on PORT ", PORT);
  });
  