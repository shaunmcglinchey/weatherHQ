angular.module('WeatherApp').component('weatherDetail', {
    templateUrl: 'weather-detail/weatherDetail.html',
    controller: function WeatherDetailController($scope, weatherService) {
        weatherService.getWeather()
            .success(function (data) {
                $scope.weather = data;
                $scope.valid = true;
            })
            .error(function () {
                $scope.valid = false;
            });
    }
}).factory('weatherService', function ($http) {
    return {
        getWeather: function () {
            return $http.get('http://localhost:8080/weather/current/2643743');
        }
    };
});