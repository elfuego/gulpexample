var gulp      = require('gulp');
var path      = require('path');

var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var plugins = require('gulp-load-plugins')();


// Using templates with data from data folder
gulp.task('jade', function() {
  gulp.src('./templates/*.jade')
    .pipe(plugins.data(function(file) {
      return require('../data/' + path.basename(file.path) + '.json');
    }))
    .pipe(plugins.jade({
      pretty: true
    }))
    .pipe(gulp.dest('./public'))
    .pipe(browserSync.reload({stream: true}));
});

