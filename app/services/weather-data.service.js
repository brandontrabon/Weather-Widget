/**
 * @description This service will be responsible for getting a processing the
 * weather data.
 */

'use strict';

define(['../app'], function(app) {
    (function() {
        /**
         * The service that performs the actual http service call to get the
         * data.
         * @param {Object} $http - Angular's http service.
         * @constructor
         */
        var WeatherDataService = function($http) {
            var vm = this;
            
            vm.serviceData = {};

            const API_URL = 'https://query.yahooapis.com/v1/public/yql?q=' +
                'select%20*%20from%20weather.forecast%20where%20woeid%20in%20' +
                '(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22{0}%2C{1}%22)&format=json' +
                '&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';

            vm.getWeatherDataFromService = getWeatherDataFromService;

            /**
             * Get weather data from the yahoo weather service.
             * @param {string} city - The city to get the weather data from.
             * @param {string} state - The state to get the weather data from.
             * @returns {*} - An http promise that will be resolved with the service data.
             */
            function getWeatherDataFromService(city, state) {
                var serviceString = API_URL.replace('{0}', city.toLowerCase());
                serviceString = serviceString.replace('{1}', state.toLowerCase());

                return $http.get(serviceString).then(
                    function(response) {
                        if (response.data.query.count === 0)
                            throw new Error('No data returned for query.');

                        var finalData = response.data.query.results.channel.item;
                        finalData.location = response.data.query.results.channel.location;

                        // return only the data we care about
                        vm.serviceData = finalData;
                    },
                    function(error) {
                        console.error(error);
                    }
                );
            }
        };

        WeatherDataService.$inject = ['$http'];
        
        app.service('WeatherDataService', WeatherDataService);
    })();
});