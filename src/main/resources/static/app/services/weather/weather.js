(function() {
    'use strict';

    // Creating the module and factory we referenced in the beforeEach blocks in our test file
    angular.module('api.weather', [])
        .factory('Weather', function() {

            var weatherList = [
                {
                    id: 2, description: "rain with clouds"
                }
            ];
            var Weather = {};

            Weather.findById = function(id) {
                // Returning a single weather object as our test expects it to
                return weatherList.find(function(weather) {
                    return weather.id === id;
                });
            };

            return Weather;
        });
})();