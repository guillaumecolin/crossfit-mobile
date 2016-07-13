(function() {
    'use strict';

    angular.module('crossfit-nancy.auth')
        .factory('Password', function ($resource) {
            return $resource('api/account/change_password', {}, {
            });
        });

    angular.module('crossfit-nancy.auth')
        .factory('PasswordResetInit', function ($resource) {
            return $resource('api/account/reset_password/init', {}, {
            })
        });

    angular.module('crossfit-nancy.auth')
        .factory('PasswordResetFinish', function ($resource) {
            return $resource('api/account/reset_password/finish', {}, {
            })
        });
})();