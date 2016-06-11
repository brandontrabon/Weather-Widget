/**
 * @description The controller used by the weather control.
 */

'use strict';

define(['../../app'], function(app) {
    (function() {
        var WeatherController = function(WeatherService) {
            var vm = this;
        };
        
        WeatherController.$inject = ['WeatherService'];
        
        app.controller('WeatherController', WeatherController);
    })();
});