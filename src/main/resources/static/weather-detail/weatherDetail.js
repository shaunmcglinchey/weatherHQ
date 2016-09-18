angular.module('WeatherApp').component('weatherDetail', {
        templateUrl: 'weather-detail/weatherDetail.html',
        controller: function WeatherDetailController($scope, weatherService) {
            $scope.greeting = "Hello Weather";
            $scope.weather = weatherService.getWeather();
            console.log('Weather:'+$scope.weather);
        }
    }).factory('weatherService', function($http){
    return {
        getWeather: function() {
            var weather = {description:"Rain"};
            return weather;
        }
    };
});