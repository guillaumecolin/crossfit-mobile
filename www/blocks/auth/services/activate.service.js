(function() {
	'use strict';

	angular.module('crossfit-nancy.auth')
	    .factory('Activate', function ($resource) {
	        return $resource('api/activate', {}, {
	            'get': { method: 'GET', params: {}, isArray: false}
	        });
	    });
})();


