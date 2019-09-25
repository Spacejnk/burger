var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

//Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      //burgers: data
      bigburger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/bigburger", function(req, res) {
  burger.create([
    "name", "testburger"
  ], [
    req.body.name, req.body.testburger
  ], function(result) {
    
    res.json({ id: result.insertId });
  });
});

router.put("/api/bigburger/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    testburger: req.body.testburger
  }, condition, function(result) {
    if (result.changedRows == 0) {
      
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/bigburger/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      
      return res.status(404).end();
      
    } else {
      res.status(200).end();
    }
  });
});


module.exports = router;