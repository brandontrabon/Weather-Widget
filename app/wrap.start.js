/**
 * @description Used by the requirejs optimizer to allow for dependencies to be
 * removed from the final library.
 */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([
            'angular'
        ], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(
            require('angular')
        );
    } else {
        //TODO: Look into each library and determine what the global name for each is
        root.customForms = factory(root.angular);
    }
}(this, function (ng) {