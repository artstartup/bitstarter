var express = require('express'), fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  fs.readFile('index.html', function(err, data) {
    if (err) throw err;
    var buf = new Buffer(256);
    response.send(buf.toString());
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
