// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var users = require('../../app/controllers/users.server.controller');

// Define the routes module' method
module.exports = function(app) {
	// Set up the 'signup' routes 
	app.route('/signup')
	   .get(users.renderSignup);
	   // .post(users.signup);

	// Set up the 'signin' routes 
	app.route('/signin')
	   .get(users.renderSignin);
	  //  .post(passport.authenticate('local', {
			// successRedirect: '/',
			// failureRedirect: '/signin',
			// failureFlash: true
	  //  }));
};