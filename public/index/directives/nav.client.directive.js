angular.module('index').directive('nav-menu', function () {
	console.log("Inside directive");
	return {
		restrict: 'A',
		template: '<h1>NAVIGATION BAR!</h1>'
	}
});


		//templateUrl: 'index/views/nav.client.view.html'