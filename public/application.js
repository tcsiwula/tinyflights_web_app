// Invoke 'strict' JavaScript mode
'use strict';

// Set the main application name
var mainApplicationModuleName = 'autos';

// Create the main application
var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngRoute', 'index', 'users']);

// Configure the hashbang URLs using the $locationProvider services 
mainApplicationModule.config(['$locationProvider',
	function($locationProvider) {
		$locationProvider.hashPrefix('');
	}
]);

// Manually bootstrap the AngularJS application
angular.element(document).ready(function() {
	angular.bootstrap(document, [mainApplicationModuleName]);
});