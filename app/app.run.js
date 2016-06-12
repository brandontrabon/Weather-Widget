/**
 * @description Used to load the template cache for the library.
 */

'use strict';

define(['./app'], function(app) {
    (function() {
        app.run(['$templateCache', function($templateCache) {
            $templateCache.put("controls/weather/weather.template.html", "<div class=\"weather\"><header>{{vm.data.city}}, {{vm.data.state}}</header><main><div>{{vm.data.temperature}}&deg;</div><div><div><img src=\"{{vm.data.imageUrl}}\" /></div><div>{{vm.data.condition}}</div></div></main><footer><div ng-repeat=\"item in vm.data.forecasts track by $index\"><div>{{item.day}}</div><div>{{item.high}}&deg; / {{item.low}}&deg;</div></div></footer></div>");
        }]);
    })();
});