/**
 * @description The build file used to turn this project into a library.
 */

({
    baseUrl: '.',
    mainConfigFile: 'main.js',
    out: '../dist/weather-widget.js',
    optimizeCss: 'standard',
    include: ['bower_components/almond/almond', 'weather-widget'],
    paths: {
        'weather-widget': './weather-widget',
        'angular': 'empty:'
    },
    wrap: {
        startFile: 'wrap.start.js',
        endFile: 'wrap.end.js'
    }
})