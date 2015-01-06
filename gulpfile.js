var gulp      = require('gulp');
var data      = require('gulp-data');
var path      = require('path');
var jade      = require('gulp-jade');
var sass      = require('gulp-sass');

var requireDir  = require('require-dir');
var dir = requireDir('./tasks', {recurse: true});


gulp.task('default',['jade','sass','browser-sync'], function () {
    gulp.watch("templates/*.jade", ['jade']);
    gulp.watch("sass/*.sass", ['sass']);
});

// moved tasks under tasks dir

