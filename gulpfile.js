var gulp      = require('gulp');
var data      = require('gulp-data');
var path      = require('path');
var jade      = require('gulp-jade');

var browserSync = require('browser-sync');
var reload      = browserSync.reload;

gulp.task('default',['jade','browser-sync'], function () {
    gulp.watch("templates/*.jade", ['jade']);
});

// Using templates with data from data folder
gulp.task('jade', function() {
  gulp.src('./templates/*.jade')
    .pipe(data(function(file) {
      return require('./data/' + path.basename(file.path) + '.json');
    }))
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('public/'))
    .pipe(browserSync.reload({stream: true}));
});

// Static server
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./public"
        }
    });
});
