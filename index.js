// Use the 'NODE_ENV' variable to run on localhost or Heroku
// To run in development mode through console/terminal:
//     $ NODE_ENV=development node index.js


// Invoke 'strict' JavaScript mode
'use strict';

/* Load dependencies */
var mongoose = require('./config/mongoose'),
	express = require('./config/express'),
	passport = require('./config/passport'),
	open = require('open'); // Not sure what this does...let me know!

// Create a new Mongoose connection instance
var db = mongoose();

// Create a new Express application instance
var app = express(db);

// Configure the Passport middleware
var passport = passport();

// Set the 'NODE_ENV' variable
if (process.env.NODE_ENV === 'development') {
	app.listen(3000);
	console.log('Server running at http://localhost:3000/');
} else { //(process.env.NODE_ENV === 'production') {
	app.listen(process.env.PORT || 5000, function() {
    	console.log("TinyFlights.com server listening on port %d [http://localhost:5000/]? in %s mode", this.address().port, app.settings.env);
    	open('http://127.0.0.1:5000');
	});
}

/* Expose this application */
module.exports = app;
