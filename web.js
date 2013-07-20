var express = require('express');
var app = express.createServer(express.logger());
var fs = require('fs');
var coso = fs.readFileSync(./index.html);
var buff = new Buffer(coso);
var string = buff.toString('utf-8');

app.get('/', function(request, response) {

    response.send(string);

  

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
