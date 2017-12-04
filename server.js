var express = require("express");
var app = express();
var request = require("request");

app.get("/getdata", function(req, res) {
  	var options = {
	    url: "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=42.3314,-83.0458&radius=500&type=restaurant&keyword=healthy&key=AIzaSyCJ-0UYImFpimu4zBf-yRJXmZgKnUAcIhY",
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