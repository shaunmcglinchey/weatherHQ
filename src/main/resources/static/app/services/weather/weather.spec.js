describe('Weather factory', function() {
    var Weather;

    var singleWeatherReport = { id: 2 , description: "sunny with clouds" };

    var Pokemon, $q, $httpBackend;

    // Add Weather endpoint
    var API = 'http://localhost:8000/weather/current/';

    // Add mocked Weather response
    var RESPONSE_SUCCESS = {
        'id': 25,
        'cityName': 'London'
    };

    // Before each test load our api.weather module
    beforeEach(angular.mock.module('api.weather'));

    // Inject $q and $httpBackend for testing HTTP requests
    // Before each test set our injected Weather factory (_Weather_) to our local Weather variable
    beforeEach(inject(function(_Weather_, _$q_, _$httpBackend_) {
        Weather = _Weather_;
        $q = _$q_;
        $httpBackend = _$httpBackend_;
    }));

    // A simple test to verify the Users factory exists
    it('should exist', function() {
        expect(Weather).toBeDefined();
    });

    // A set of tests for our Weather.findById() method
    describe('.findById()', function() {

        beforeEach(function() {
            // Initialize our local result object to an empty object before each test
            result = {};

            // Spy on our service call but allow it to continue to its implementation
            spyOn(Weather, "findById").and.callThrough();
        });

        it('should return weather for a specific city', function() {
            expect(Weather.findById).toBeDefined();
        });
        
        it('should return a Weather report when called with a valid city code', function() {
            var cityCode = 5;

            // Declare the endpoint we expect our service to hit and provide it with our mocked return values
            $httpBackend.whenGET(API + cityCode).respond(200, $q.when(RESPONSE_SUCCESS));

            expect(Weather.findById).not.toHaveBeenCalled();
            expect(result).toEqual({});

            Weather.findById(cityCode)
                .then(function(res) {
                    result = res;
                });

            // Flush pending HTTP requests
            $httpBackend.flush();

            expect(Weather.findById).toHaveBeenCalledWith(cityCode);
            expect(result.id).toEqual(25);
            expect(result.cityName).toEqual('London');

        });

    });
});