// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'crossfit-nancy' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'crossfit-nancy.services' is found in services.js
// 'crossfit-nancy.controllers' is found in controllers.js
(function() {

    'use strict';

	angular
		.module('crossfit-nancy', [
			/* Shared modules */
			'ionic',
			'crossfit-nancy.core',
			'crossfit-nancy.layout',
			/* Feature areas */
			'crossfit-nancy.account',
			'crossfit-nancy.wod',
			'crossfit-nancy.planning',
			'crossfit-nancy.login'
		]);
})();
