(function() {
    'use strict';

    angular
        .module('crossfit-nancy.login')
        .run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [{
            state: 'login',
            config: {
                url: '/login',
                templateUrl: 'login/login.html'
            }
        }];
    }
})();

