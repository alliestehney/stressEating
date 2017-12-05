var express = require("express");
var app = express();
var request = require("request");

app.get("/getdata", function(req, res) {

	var radius = req.query.radius;
	var lat = req.query.lat;
	var long = req.query.long;

  	var options = {
	    url: "https://maps.googleapis.com/maps/api/place/nearbysearch/json?&type=restaurant&keyword=healthy&key=AIzaSyBTFz3V2VpfacuN9T25tXnDk4T4AzSySAE&radius="+radius+"&location="+lat+","+long,
	    headers: {
	      json: true
    	}
  	}

 	request(options, function(error, response, body) {
   		console.log(body);
   		res.send(JSON.parse(body));
 	});
});

var server = app.listen(5000, function () {
	var port = server.address().port;
	console.log("App’s server listening at http://localhost:%s", port);
});
