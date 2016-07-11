(function() {
    'use strict';

    angular
        .module('crossfit-nancy.chat')
        .run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(), '/login');
    }

    function getStates() {
        return [
        {
            state: 'tab.chats',
            config: {
                url: '/chats',
                views: {
                    'tab-chats': {
                        templateUrl: 'chat/tab-chats.html',
                        controller: 'ChatsCtrl'
                    }
                }
            }
        },
        {
            state: 'tab.chat-detail',
            config: {
                url: '/chats/:chatId',
                views: {
                    'tab-chats': {
                        templateUrl: 'chat/chat-detail.html',
                        controller: 'ChatDetailCtrl'
                    }
                }
            }
        }
    ];}
})();
