// Invoke 'strict' JavaScript mode
'use strict';

// Configure the 'articles' module routes
angular.module('users').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/signin', {
			templateUrl: 'users/views/users-signin.client.view.html'
		}).
		when('/signup', {
			templateUrl: 'users/views/users-signup.client.view.html'
		});
	}
]); 