var express = require('express');
var app = express();

console.log(__dirname + '/../src');

// serve static content
app.use('/', express.static(__dirname + '/../src'));

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("Listening on " + port);
});