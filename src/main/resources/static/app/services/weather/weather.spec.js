describe('Weather factory', function() {
    var Weather;

    // Before each test load our api.weather module
    beforeEach(angular.mock.module('api.weather'));

    // Before each test set our injected Users factory (_Users_) to our local Users variable
    beforeEach(inject(function(_Weather_) {
        Weather = _Weather_;
    }));

    // A simple test to verify the Users factory exists
    it('should exist', function() {
        expect(Weather).toBeDefined();
    });

    // A set of tests for our Weather.current() method
    describe('.current()', function() {
        // A simple test to verify the method current exists
        it('should exist', function() {
            expect(Weather.current).toBeDefined();
        });
    });
});