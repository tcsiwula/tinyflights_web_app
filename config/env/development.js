// Invoke 'strict' JavaScript mode
'use strict';

// Set the 'development' environment configuration object
module.exports = {
	db: 'mongodb://brandon:brobusf21@ds031925.mlab.com:31925/tinyflights',
	sessionSecret: 'developmentSessionSecret',
	facebook: {
		clientID: '264376823943249',
		clientSecret: 'd33f394e3de5be96d0bf9825f6111e54',
		callbackURL: 'http://localhost:3000/oauth/facebook/callback'
	}
};