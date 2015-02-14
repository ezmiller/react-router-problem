// server.js

// BASE SETUP
// ==============================================

var express = require('express');
var app     = express();
var port    =   process.env.PORT || 8080;
var fs = require('fs');

// ROUTES
// ==============================================

// we'll create our routes here

// get an instance of router
var router = express.Router();

// home page route (http://localhost:8080)
router.get('/', function(req, res) {
	fs.readFile(__dirname + '/index.html', function (err, data) {
	    if (err) {
	      res.writeHead(500);
	      return res.end('Error loading index.html');
	    }
	    res.setHeader('Access-Control-Allow-Origin', "*");
	    res.writeHead(200);
	    res.end(data);
  	});
});

router.get('/assets/:file', function(req, res) {
	// Note: should use a stream here, instead of fs.readFile
	fs.readFile('./assets/' + req.params.file, function(err, data) {
		if(err) {
		  res.send("Oops! Couldn't find that file.");
		} else {
		  // set the content type based on the file
		  res.contentType(req.params.file);
		  res.send(data);
		}
		res.end();
	}); 
});

// apply the routes to our application
app.use('/', router);

// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);
