var express = require('express');
var app = express();

// Set the view engine && public folder
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));

// Register root route
app.get('/pixelArt', function(req, res) {
  res.render('pixelArt/views/index');
});

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Server up and listening on', port);
});