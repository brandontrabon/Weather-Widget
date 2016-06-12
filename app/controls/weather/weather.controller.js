/**
 * @description The controller used by the weather control.
 */

'use strict';

define(['../../app'], function(app) {
    (function() {
        /**
         * The weather controller simply makes the call to the weather service.
         * @param {Object} WeatherService - The service used by the weather widget control.
         * @constructor
         */
        var WeatherController = function(WeatherService) {
            var vm = this;

            // the data bound to the template
            vm.data = {};

            // the number of forecast days to show
            const FORECAST_DAYS = 5;

            /**
             * The weather service is called upon startup to load the data.
             */
            WeatherService.getWeatherData(vm.city, vm.state, FORECAST_DAYS).then(
                function(response) {
                    vm.data = response;
                },
                function(error) {
                    console.error(error);
                }
            );
        };
        
        WeatherController.$inject = ['WeatherService'];
        
        app.controller('WeatherController', WeatherController);
    })();
});