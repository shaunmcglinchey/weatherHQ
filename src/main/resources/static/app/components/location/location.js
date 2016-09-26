(function() {
    'use strict';

    // Define the component and controller we loaded in our test
    angular.module('components.location', [])
        .controller('LocationController', function(resolvedLocation) {
            var vm = this;
            vm.location = resolvedLocation;
        })
        .config(function($stateProvider) {
            $stateProvider
                .state('location', {
                    url: '/location/:id',
                    templateUrl: 'components/location/location.html',
                    controller: 'LocationController as lc',
                    resolve: {
                        // Add resolvedUser with a call to Users using $stateParams
                        resolvedLocation: function(Location, $stateParams) {
                            return Location.findById($stateParams.id);
                        }
                    }
                });
        });
})();