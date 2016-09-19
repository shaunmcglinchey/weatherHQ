WeatherHQ
==============
Spring Boot web application with backend integration to OpenWeatherMap RESTful API

Technologies used
--------------
* Java 8
* Spring Boot 1.4
* Maven
* Mockito
* AssertJ

Running instructions
--------------------
The project can be run from within an IDE (such as IntelliJ) or directly from the command-line, like so:
* ./mvnw spring-boot:run -Drun.arguments="--open.weather.map.api.key=$INSERT_OPEN_WEATHER_MAP_API_KEY_HERE"

* Once the embedded Tomcat has started the web application can be viewed by visiting the following URL in the browser:
http://localhost:8080

To do
--------------
* Increase unit test coverage
* Add integration tests
* Validate accuracy of OpenWeatherMap sunrise and sunset times
* Finish simple AngularJS frontend (simple form component that invokes a 'weatherService' which handles the calls to the API backend via Angular '$http' service).