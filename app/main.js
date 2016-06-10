/**
 * @description This is the setup file for require.js.
 */

require.config({
    paths: {
        'domReady': './bower_components/domReady/domReady',
        'angular': './bower_components/angular/angular',
        'bootstrap-sass-js': './bower_components/bootstrap-sass/assets/javascripts/bootstrap',
        'jquery': './bower_components/jquery/dist/jquery'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'bootstrap-sass-js': {
            deps: ['jquery']
        }
    },
    deps: ['./bootstrap']
});