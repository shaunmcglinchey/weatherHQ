(function() {
    'use strict';

    // Creating the module and factory we referenced in the beforeEach blocks in our test file
    angular.module('api.weather', [])
        .factory('Weather', function() {
            var Weather = {};

            Weather.current = function() {};
            
            return Weather;
        });
})();