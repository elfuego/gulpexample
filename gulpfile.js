var gulp      = require('gulp');
var path      = require('path');

var requireDir  = require('require-dir');
var dir = requireDir('./tasks', {recurse: true});
var plugins = require('gulp-load-plugins')();


gulp.task('default',['jade','less','browser-sync'], function () {
    gulp.watch("templates/*.jade", ['jade']);
    gulp.watch("less/*.less", ['less']);
});

// moved tasks under tasks dir

