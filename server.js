var express = require('express');
var app = express();

// Set the view engine && public folder
app.set('view engine', 'ejs');
app.set('views', [__dirname]);
app.use(express.static(__dirname + '/assets'));

// Import and register the pixelArt routes
var pixelRoutes = require('./pixelArt/controllers/routes')
app.use('/pixelArt', pixelRoutes);

// Import and register the pixelArt routes
var spotifyRoutes = require('./spotify/controllers/routes')
app.use('/spotify', spotifyRoutes);

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Server up and listening on', port);
});