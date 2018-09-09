var app = angular.module('multiPageApp', ['ngRoute'])

// angular.module('myApp', []) //Setter syntax

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'views/home.html'
		})
		.when('/about', {
			templateUrl: 'views/about.html'
		})
		.when('/faq', {
			templateUrl: 'views/faq.html'
		})

		.otherwise({
			redirectTo: '/'
		})
})