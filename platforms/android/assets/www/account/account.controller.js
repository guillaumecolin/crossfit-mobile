(function() {
    'use strict';
    angular.module('crossfit-nancy.account')
        .controller('AccountCtrl', AccountCtrl);

    AccountCtrl.$inject = ['$scope'];
    function AccountCtrl($scope) {
        $scope.settings = {
            enableFriends: true
        };
    }
})();
