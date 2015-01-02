var gulp      = require('gulp');
var data      = require('gulp-data');
var path      = require('path');
var connect   = require('gulp-connect')
var jade      = require('gulp-jade');

gulp.task('default',['jade','connect']);

gulp.task('jade', function() {
  gulp.src('./templates/*.jade')
    .pipe(data(function(file) {
      return require('./data/' + path.basename(file.path) + '.json');
    }))
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('public/'));
});

gulp.task('connect', function () {
  connect.server({
    root: 'public/',
    port: 8888
  });
});

