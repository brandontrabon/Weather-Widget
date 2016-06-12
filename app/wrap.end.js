/**
 * @description Used by the requirejs optimizer to allow for dependencies to be
 * removed from the final library.
 */

    define('angular', function() {
        return ng;
    });

    return require('weather-widget');
}));