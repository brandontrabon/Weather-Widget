/**
 * @description Displays the weather for a particular location and the 5-day
 * forecast.
 */

'use strict';

define(['../../app'], function(app) {
    var directive = function() {
        return {
            restrict: 'E',
            scope: {},
            controller: 'WeatherController',
            controllerAs: 'vm',
            bindToController: {},
            templateUrl: 'controls/weather/weather.template.html'
        };
    };

    app.directive('weatherWidget', directive);
});