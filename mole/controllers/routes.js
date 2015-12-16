var express = require("express");
var router = express.Router()

// function songRoutes(router) {
router.get('/', function(req, res) {
  res.render('mole/views/game-options');
});

router.get('/game', function(req, res) {
	res.render('mole/views/game-board');
});

module.exports = router;

