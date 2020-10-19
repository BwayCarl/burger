// Dependencies
const express = require("express");
const exphbs = require("express-handlebars");

// Set up Express App
const app = express();
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up Heroku Port and local port
var PORT = process.env.PORT || 8080;

// Set up Handelbars App
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Set up Routes
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

app.listen(PORT, function() {
    console.log("Listening on PORT ", PORT);
  });
  