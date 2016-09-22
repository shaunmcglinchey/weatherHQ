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
        var LocationController;

        beforeEach(function() {
            // Create an instance of our controller
            LocationController = $controller('LocationController', { });
        });

        // Verify our controller exists
        it('should be defined', function() {
            expect(LocationController).toBeDefined();
        });
    });
});