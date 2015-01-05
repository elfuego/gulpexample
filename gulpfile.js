var gulp      = require('gulp');
var data      = require('gulp-data');
var path      = require('path');
var jade      = require('gulp-jade');
var sass      = require('gulp-sass');

var browserSync = require('browser-sync');
var reload      = browserSync.reload;

gulp.task('default',['jade','sass','browser-sync'], function () {
    gulp.watch("templates/*.jade", ['jade']);
    gulp.watch("sass/*.sass", ['sass']);
});

gulp.task('sass', function () {
    gulp.src('./sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/css'))
        .pipe(browserSync.reload({stream: true}));
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
    .pipe(gulp.dest('./public'))
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
