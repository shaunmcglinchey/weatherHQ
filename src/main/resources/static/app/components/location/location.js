(function() {
    'use strict';

    // Define the component and controller we loaded in our test
    angular.module('components.location', [])
        .controller('LocationController', function() {
            var vm = this;
        })
        .config(function($stateProvider) {
            $stateProvider
                .state('location', {
                    url: '/location/:id',
                    templateUrl: 'components/locaton/location.html',
                    controller: 'LocationController as lc'
                });
        });
})();