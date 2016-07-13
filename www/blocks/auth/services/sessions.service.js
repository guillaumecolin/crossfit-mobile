(function() {
	'use strict';

	angular.module('crossfit-nancy.auth')
	    .factory('Sessions', function ($resource) {
	        return $resource('api/account/sessions/:series', {}, {
	            'getAll': { method: 'GET', isArray: true}
	        });
	    });

})();

