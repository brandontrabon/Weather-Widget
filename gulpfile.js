/**
 * @description The gulp file used to build the project.
 */

var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('build', shell.task([
    'node_modules/requirejs/bin/r.js -o app/build.js',
    'node_modules/requirejs/bin/r.js -o app/build.css.js'
]));