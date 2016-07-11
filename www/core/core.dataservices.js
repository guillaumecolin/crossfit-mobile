(function() {

    'use strict';

    angular.module('crossfit-nancy.core')
        .factory('Wods', Wods);

    function Wods() {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var wods = [{
            id: 0,
            name: 'Ben Sparrow',
            lastText: 'You on your way?',
            face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
        }, {
            id: 1,
            name: 'Max Lynx',
            lastText: 'Hey, it\'s me',
            face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
        },{
            id: 2,
            name: 'Adam Bradleyson',
            lastText: 'I should buy a boat',
            face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
        }, {
            id: 3,
            name: 'Perry Governor',
            lastText: 'Look at my mukluks!',
            face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
        }, {
            id: 4,
            name: 'Mike Harrington',
            lastText: 'This is wicked good ice cream.',
            face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
        }];

        var service = {
            all: allWods,
            remove: removeWod,
            get: getWod
        };

        return service;

        //////////////////

        function allWods() {
            return wods;
        }

        function removeWod(wod) {
            wods.splice(wods.indexOf(wod), 1);
        }

        function getWod(wodId) {
            for (var i = 0; i < wods.length; i++) {
                if (wods[i].id === parseInt(wodId)) {
                    return wods[i];
                }
            }
            return null;
        }

    }

})();
