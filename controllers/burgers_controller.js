const express = require("express");
const router = express.Router();
var burger = require("../models/burger.js");

// GET ROUTE for the main page
router.get("/", function(req, res) {
    res.redirect("/burgers");
  });

  router.get("/burgers", (req, res) => {
      burger.all(function (allBurgers) {
        res.render("index", { burger_data: allBurgers });
      });
    });

//Creating a new burger with POST Method
router.post("/burgers/create", (req, res) => {
    burger.createOne(req.body.burgerName, (result) => {
        console.log(result);
        res.redirect("/");
      });
  });

//Updating whether object is devoured with PUT Method
router.put("/burgers/:id", (req, res) => {
    burger.updateOne(req.params.id,function (result) {
        console.log(result);
        res.sendStatus(200);
      });
  });

module.exports = router;