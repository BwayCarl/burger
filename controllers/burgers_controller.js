const express = require("express");
const router = express.Router();
var burger = require("../models/burger.js");

// GET ROUTE for all burgers existing in database
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//Creating a new burger with POST Method
router.post("/burgers/create", (req, res) => {
    burger.create(
        req.body.burger_name,  (res) => {
        res.redirect("/");
      });
  });

//Updating whether object is devoured with PUT Method
router.put("/burgers/:id", (req, res) => {
   
    burger.update(req.params.id,(result) => {
      console.log(result);
      res.redirect("/");
      });
  });

module.exports = router;