(function() {
    'use strict';
    angular.module('crossfit-nancy.wod')
    .controller('WodDetailCtrl', WodDetailCtrl);

    WodDetailCtrl.$inject = ['$scope', '$stateParams', 'Wods'];

    function WodDetailCtrl ($scope, $stateParams, Wods) {
        $scope.wod = Wods.get($stateParams.wodId);
    }

})();
