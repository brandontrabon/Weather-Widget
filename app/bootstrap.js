/**
 * @description Bootstraps the main application.
 */

'use strict';

define(['require', 'angular', './weather-widget'], function(require, ng) {
    require(['domReady!'], function(document) {
        ng.bootstrap(document, ['weather-widget']);
    });
});