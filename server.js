var express = require('express');
var app = express();

// Set the view engine && public folder
app.set('view engine', 'ejs');
app.set('views', [__dirname]);
app.use(express.static(__dirname + '/assets'));

// Register the landing page
app.get('/', function(req, res) {
	res.render('landing');
});

// Import and register the routes
var pixelRoutes = require('./pixelArt/controllers/routes')
app.use('/pixelArt', pixelRoutes);

var spotifyRoutes = require('./spotify/controllers/routes')
app.use('/spotify', spotifyRoutes);

var moleRoutes = require('./mole/controllers/routes')
app.use('/mole', moleRoutes);

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Server up and listening on', port);
});