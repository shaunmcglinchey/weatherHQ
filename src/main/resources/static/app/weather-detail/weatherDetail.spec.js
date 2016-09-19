describe('Weather factory', function() {
    var WeatherService;

    // Before each test load our api.weather module
    beforeEach(angular.mock.module('WeatherApp'));

    // Before each test set our injected Users factory (_Users_) to our local Users variable
    beforeEach(inject(function(_weatherService_) {
        WeatherService = _weatherService_;
    }));

    // A simple test to verify the Users factory exists
    it('should exist', function() {
        expect(WeatherService).toBeDefined();
    });
});