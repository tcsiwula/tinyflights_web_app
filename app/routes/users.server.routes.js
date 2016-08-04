// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var users = require('../../app/controllers/users.server.controller'),
	passport = require('passport');

// Define the routes module' method
module.exports = function(app) {
	// Set up the 'signup' routes 
	app.route('/signup')
	   .get(users.renderSignup)
	   .post(users.signup);

	// Set up the 'signin' routes 
	app.route('/login')
	   .get(users.renderLogin)
	   .post(passport.authenticate('local', {
			successRedirect: '/',
			failureRedirect: '/login',
			failureFlash: true
	   }));

	// Set up the Facebook OAuth routes 
	app.get('/oauth/facebook', passport.authenticate('facebook', {
		authType: 'reauthenticate',
		failureRedirect: '/login'
	}));
	app.get('/oauth/facebook/callback', passport.authenticate('facebook', {
		failureRedirect: '/login',
		successRedirect: '/'
	}));

	// Set up the 'signout' route
	// app.get('/logout', users.logout);
	app.route('/logout')
	   .get(users.logout);
};