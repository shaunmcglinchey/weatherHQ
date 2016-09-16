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
* mvn package
* java -jar target/weatherhq-0.0.1-SNAPSHOT.jar

To do
--------------
* Increase unit test coverage
* Add integration tests
* Validate accuracy of OpenWeatherMap sunrise and sunset times
* Add simple AngularJS frontend (simple form component that invokes a 'weatherService' which in turn will handle the calls to the API backend via Angular '$http' service).