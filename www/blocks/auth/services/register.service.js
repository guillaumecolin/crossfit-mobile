(function() {
	'use strict';

	angular.module('crossfit-nancy.auth')
	    .factory('Register', function ($resource) {
	        return $resource('api/register', {}, {
	        });
	    });

})();
