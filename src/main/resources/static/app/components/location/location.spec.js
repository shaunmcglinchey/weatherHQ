describe('components.location', function() {
    var $controller;

    // Load ui.router and our components.profile module which we'll create next
    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('components.location'));

    // Inject the $controller service
    beforeEach(inject(function(_$controller_) {
        $controller = _$controller_;
    }));

    describe('LocationController', function() {
        var LocationController, singleLocation;

        beforeEach(function() {

            // Define singleUser and add resolvedUser as a dependency to our controller
            singleLocation = {
                id: 123,
                cityName: 'London'
            };

            // Create an instance of our controller
            LocationController = $controller('LocationController', { resolvedLocation: singleLocation });
        });

        // Verify our controller exists
        it('should be defined', function() {
            expect(LocationController).toBeDefined();
        });
    });
});