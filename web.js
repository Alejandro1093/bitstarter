var express = require('express');
var app = express.createServer(express.logger());
var fs = require('fs');
    


app.get('/', function(request, response) {

    fs.readFile('/home/ubuntu/bitstarter/index.html', 'utf8', function (err,data){
	if(err) {
	    return 'error';
	    }

  response.send('wassa');
	});

});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
