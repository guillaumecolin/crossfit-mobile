(function() {
    'use strict';

    angular
        .module('crossfit-nancy.planning')
        .run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(), '/login');
    }

    function getStates() {
        return [{
            state: 'tab.planning',
            config: {
                url: '/planning',
                views: {
                    'tab-planning': {
                        templateUrl: 'planning/tab-planning.html',
                        controller: 'PlanningCtrl'
                    }
                }
            }
        }];
    }
})();

