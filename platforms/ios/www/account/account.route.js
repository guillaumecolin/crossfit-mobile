(function() {
    'use strict';

    angular
        .module('crossfit-nancy.account')
        .run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(), '/login');
    }

    function getStates() {
        return [{
            state: 'tab.account',
            config: {
                url: '/account',
                views: {
                  'tab-account': {
                      templateUrl: 'account/tab-account.html',
                      controller: 'AccountCtrl'
                  }
              }
            }
        }];
    }
})();
