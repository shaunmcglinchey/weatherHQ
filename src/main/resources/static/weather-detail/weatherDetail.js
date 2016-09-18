angular.module('WeatherApp').component('weatherDetail', {
        templateUrl: 'weather-detail/weatherDetail.html',
        controller: function WeatherDetailController($scope) {
            $scope.greeting = "Hello Weather";
        }
    });