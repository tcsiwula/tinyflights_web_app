// Invoke 'strict' JavaScript mode
'use strict';

// Create a new controller method that renders the signin page
exports.renderSignin = function(req, res, next) {
	console.log("In signin!");
	res.render('signin');
};

// Create a new controller method that renders the signup page
exports.renderSignup = function(req, res, next) {
	console.log("In signup!");
	res.render('signup');
};