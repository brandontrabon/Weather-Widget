/**
 * @description The service used by the weather control.
 */

'use strict';

define(['../../app'], function(app) {
    (function() {
        /**
         * The service used by the weather widget control. This service is used
         * create the "consumable" data for the control instead of having all
         * of that logic in a single service.
         * @param {Object} WeatherDataService - The service that performs the actual http service calls.
         * @param {Object} $q - Angular's promise service.
         * @constructor
         */
        var WeatherService = function(WeatherDataService, $q) {
            var vm = this;

            vm.getWeatherData = getWeatherData;

            /**
             * Gets weather data from the weather service and returns it in an
             * easier to consume format.
             * @param {string} city - The city to get the weather information from.
             * @param {string} state - The state to get the weather information from.
             * @param {number} forecastDays - The number of forecast days to show.
             * @returns {*} - A promise that will be resolved when the data is returned.
             */
            function getWeatherData(city, state, forecastDays) {
                var deferred = $q.defer();
                
                WeatherDataService.getWeatherDataFromService(city, state, forecastDays).then(
                    function() {
                        var serviceData = WeatherDataService.serviceData;

                        var finalData = {
                            'city': serviceData.location.city,
                            'state': serviceData.location.region,
                            'temperature': serviceData.condition.temp,
                            'condition': serviceData.condition.text,
                            'imageUrl': getImageSource(serviceData.description),
                            'forecasts': []
                        };

                        // for now just retrieve the first 5 days
                        for (var i = 0; i < forecastDays; i++) {
                            var forecastData = serviceData.forecast[i];

                            var item = {
                                'day': forecastData.day,
                                'high': forecastData.high,
                                'low': forecastData.low
                            };
                            finalData.forecasts.push(item);
                        }

                        deferred.resolve(finalData);
                    }
                );
                
                return deferred.promise;
            }

            /**
             * Used to get the weather condition image out of some CDATA text.
             * @param {string} imageText - The text to retrieve the image url from.
             * @returns {string} The condition image Url.
             */
            function getImageSource(imageText) {
                var searchText = 'src="';
                var startIndex = imageText.indexOf(searchText) + searchText.length;
                var endIndex = imageText.indexOf('"', (startIndex + 1));
                var imageSource = imageText.substr(startIndex, (endIndex - startIndex));

                return imageSource;
            }
        };

        WeatherService.$inject = ['WeatherDataService', '$q'];
        
        app.service('WeatherService', WeatherService);
    })();
});