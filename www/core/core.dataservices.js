(function() {

    'use strict';

    angular.module('crossfit-nancy.core')
        .factory('Wods', Wods);

    function Wods() {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var wods = [{
            id: 0,
            date: 'Mercredi 13 juillet 2016',
            horaire: '18:00-19h00',
            libelle: 'Wod cardio',
            coatch: 'https://static.wixstatic.com/media/ff49eb_62d3e7244d47449f8cb00c4522995af6.jpg/v1/fill/w_239,h_321,al_c,q_80/ff49eb_62d3e7244d47449f8cb00c4522995af6.jpg',
            programme: '<p>20 Shoulder press<\/p><p>20 Double under<\/p><p>20 Pull up<\/p>'
        }, {
            id: 1,
            date: 'Jeudi 14 juillet 2016',
            horaire: '10:00-11:00',
            libelle: 'Wod à la pép\'',
            coatch: 'https://static.wixstatic.com/media/ff49eb_62d3e7244d47449f8cb00c4522995af6.jpg/v1/fill/w_239,h_321,al_c,q_80/ff49eb_62d3e7244d47449f8cb00c4522995af6.jpg'
        },{
            id: 2,
            date: 'Mercredi 20 juillet 2016',
            horaire: '18:00-19h00',
            libelle: 'Wod cardio',
            coatch: 'https://static.wixstatic.com/media/ff49eb_62d3e7244d47449f8cb00c4522995af6.jpg/v1/fill/w_239,h_321,al_c,q_80/ff49eb_62d3e7244d47449f8cb00c4522995af6.jpg'
        }, {
            id: 3,
            date: 'Vendredi 22 juillet 2016',
            horaire: '18:00-19h00',
            libelle: 'Wod haltéro',
            coatch: 'https://static.wixstatic.com/media/ff49eb_62d3e7244d47449f8cb00c4522995af6.jpg/v1/fill/w_239,h_321,al_c,q_80/ff49eb_62d3e7244d47449f8cb00c4522995af6.jpg'
        }, {
            id: 4,
            date: 'Samedi 23 juillet 2016',
            horaire: '11:00-12h00',
            libelle: 'Wod EMOM',
            coatch: 'https://static.wixstatic.com/media/ff49eb_62d3e7244d47449f8cb00c4522995af6.jpg/v1/fill/w_239,h_321,al_c,q_80/ff49eb_62d3e7244d47449f8cb00c4522995af6.jpg'
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
