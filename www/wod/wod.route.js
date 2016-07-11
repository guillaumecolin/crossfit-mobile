(function() {
    'use strict';

    angular
        .module('crossfit-nancy.wod')
        .run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(), '/login');
    }

    function getStates() {
        return [
        {
            state: 'tab.wods',
            config: {
                url: '/wods',
                views: {
                    'tab-wods': {
                        templateUrl: 'wod/tab-wods.html',
                        controller: 'WodsCtrl'
                    }
                }
            }
        },
        {
            state: 'tab.wod-detail',
            config: {
                url: '/wods/:wodId',
                views: {
                    'tab-wods': {
                        templateUrl: 'wod/wod-detail.html',
                        controller: 'WodDetailCtrl'
                    }
                }
            }
        }
    ];}
})();
