var express = require("express");
var router = express.Router()

// function songRoutes(router) {
router.get('/', function(req, res) {
  console.log("YO YO YO")
  res.render('index');
});

module.exports = router;

