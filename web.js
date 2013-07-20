ear express = require('express');
var app = express();
app.use(express.logger());

var datas;

fs = require('fs');
fs.readFile('/bitstarter/index.html', 'utf8', function (err, data) {

    if (err) {
	return console.log(err);
	}
    datas = data;
    console.log(data);

});


app.get('/', function(request, response) {
  response.send('wassa');
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
