describe('Weather factory', function() {
    var Weather;

    var singleWeatherReport = { id: 2 , description: "rain with clouds" };

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
    describe('.findById()', function() {

        it('should return weather for a specific city', function() {
            expect(Weather.findById).toBeDefined();
        });

        // A test to verify that calling findById() with an id, in this case '2', returns a single weather report
        it('should return one weather object if it exists', function() {
            expect(Weather.findById(2)).toEqual(singleWeatherReport);
        });

    });
});