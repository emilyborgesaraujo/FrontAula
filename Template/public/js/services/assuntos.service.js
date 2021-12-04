(function() {
    'use strict';

    angular
        .module('MyApp')
        .factory('AssuntoService', AssuntoService);

        AssuntoService.$inject = ['$http', '$window', '$rootScope'];

    function AssuntoService($http, $window, $rootScope) {
        var service = {
            find: find,
            findById: findById,
            save: save,
            remove: remove
        };

        var URL = 'http://localhost:8080/api/assuntos';

        return service;

        function find(query) {
            return $http.get(URL, {
                params: {
                    filter: JSON.stringify(query)
                }
            });
        }

        function findById(id) {
            return $http.get(URL + '/' + id);
        }

        function save(record) {

            if (record.id) {
                return $http.put(URL + '/' + record.id, record);
            } else {
                return $http.post(URL, record);
            }
        }

        function remove(id) {
            return $http.delete(URL + '/' + id);
        }
    }
    
})();