(function() {
    'use strict';
    angular.module('crossfit-nancy.chat')
    .controller('ChatDetailCtrl', ChatDetailCtrl);

    ChatDetailCtrl.$inject = ['$scope', '$stateParams', 'Chats'];

    function ChatDetailCtrl ($scope, $stateParams, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);
    }

})();
