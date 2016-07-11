(function() {
    'use strict';
    angular.module('crossfit-nancy.wod')
        .controller('WodsCtrl', WodsCtrl);

    WodsCtrl.$inject = ['$scope', 'Wods'];
    function WodsCtrl($scope, Wods) {
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //
        //$scope.$on('$ionicView.enter', function(e) {
        //});

        $scope.wods = Wods.all();
        $scope.remove = function(wod) {
            Wods.remove(wod);
        };
    }
})();
