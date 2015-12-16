var express = require("express");
var router = express.Router()

// function songRoutes(router) {
router.get('/', function(req, res) {
  res.render('spotify/views/spotify');
});

module.exports = router;

