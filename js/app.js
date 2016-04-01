var spaApp = angular.module('spaApp', [
		'ngRoute',
		'HomeController', 
		'AboutController', 
		'ContactController', 
		'StudentController', 
		'StudentService'
	]);


spaApp.config(function ($routeProvider) {
	$routeProvider
		.when('/', 
			{
				controller: 'HomeController',
				templateUrl: 'partials/home.html'
			})
		.when('/about', 
			{
				controller: 'AboutController',
				templateUrl: 'partials/about.html'
			})
		.when('/contact', 
			{
				controller: 'ContactController',
				templateUrl: 'partials/contact.html'
			})
		.when('/student', 
			{
				controller: 'StudentController',
				templateUrl: 'partials/student.html'
			})
		.otherwise({ redirectTo: '/'});
});

