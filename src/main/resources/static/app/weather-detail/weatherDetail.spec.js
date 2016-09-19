beforeEach(module('WeatherApp'));
beforeEach(inject(function(weatherService, _$httpBackend_) {
    service = weatherService;
    $httpBackend = _$httpBackend_;
}));