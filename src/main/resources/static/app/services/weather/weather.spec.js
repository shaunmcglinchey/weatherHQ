describe('Weather factory', function() {
    var Weather;

    var WeatherReport = { description: "rain with clouds" };

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

        // A test to verify that calling current() returns the weather report we hard-coded above
        it('should return a hard-coded weather report', function() {
            expect(Weather.current()).toEqual(WeatherReport);
        });
    });
});