describe('components.location', function() {
    var $controller, Weather, $q, $httpBackend;
    var API = 'http://pokeapi.co/api/v2/pokemon/';
    var RESPONSE_SUCCESS = {
        'id': 58,
        'name': 'growlithe',
        'sprites': {
            'front_default': 'http://pokeapi.co/media/sprites/pokemon/58.png'
        },
        'types': [{
            'type': { 'name': 'fire' }
        }]
    };



    // Load ui.router and our components.profile module which we'll create next
    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('api.weather'));
    beforeEach(angular.mock.module('components.location'));

    // Inject Weather factory, $q, and $httpBackend for testing HTTP requests
    beforeEach(inject(function(_$controller_, _Weather_, _$q_, _$httpBackend_) {
        $controller = _$controller_;
        Weather = _Weather_;
        $q = _$q_;
        $httpBackend = _$httpBackend_;
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
            LocationController = $controller('LocationController', { resolvedLocation: singleLocation, Weather: Weather });
        });

        // Verify our controller exists
        it('should be defined', function() {
            expect(LocationController).toBeDefined();
        });

    });

    describe('LocationController with a valid resolved location and a valid Weather factory', function() {
        var LocationController, singleLocation;

        beforeEach(function() {

            // Define singleUser and add resolvedUser as a dependency to our controller
            singleLocation = {
                id: 123,
                cityName: 'London'
            };

            spyOn(Weather, "findById").and.callThrough();

            // Create an instance of our controller
            LocationController = $controller('LocationController', { resolvedLocation: singleLocation, Weather: Weather });
        });

        // Verify our controller exists
        it('should be defined', function() {
            expect(LocationController).toBeDefined();
        });

        it('should set the view model location object to the resolvedLocation', function() {
            expect(LocationController.location).toEqual(singleLocation);
        });

        it('should call Weather.findById and return a Weather object', function() {
            expect(LocationController.location.weather).toBeUndefined();
        });
    });
});