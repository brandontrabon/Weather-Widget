/**
 * @description Displays the weather for a particular location and the 5-day
 * forecast.
 */

'use strict';

define(['../../app'], function(app) {
    (function() {
        /**
         * The directive definition for the weather widget; instead of using scope
         * we bind directly to the controller. This is a recommendation of John Papa
         * on cleanliness of Angular code.
         * @param {Object} $templateCache - Angular's $templateCache service; used to store and retrieve templates.
         * @returns {Object} The directive to be displayed by Angular.
         */
        var directive = function($templateCache) {
            return {
                restrict: 'E',
                scope: {},
                controller: 'WeatherController',
                controllerAs: 'vm',
                bindToController: {
                    city: '@',
                    state: '@'
                },
                template: $templateCache.get('controls/weather/weather.template.html')
            };
        };

        directive.$inject = ['$templateCache'];

        app.directive('weatherWidget', directive);
    })();
});