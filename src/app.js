(function () {
	'use strict';
	var app = angular.module('ubigeos', ['ui.router'])
		.config(['$stateProvider','$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.otherwise("/");
			$stateProvider
				.state('home', { 
					url: "/",
					templateUrl: "dist/routes/home/home.template.html",
					controller: "homeCtrl", 
					controllerAs: "home" 
				});
		}])
	require('Routes/Home')(angular, app);
	require('Services/Ubigeos')(angular, app);
})();