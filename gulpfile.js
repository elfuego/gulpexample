var gulp      = require('gulp');
var path      = require('path');

var requireDir  = require('require-dir');
var dir = requireDir('./tasks', {recurse: true});
var plugins = require('gulp-load-plugins')();


gulp.task('default',['jade','sass','browser-sync'], function () {
    gulp.watch("templates/*.jade", ['jade']);
    gulp.watch("sass/*.sass", ['sass']);
});

// moved tasks under tasks dir

