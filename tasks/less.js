var gulp      = require('gulp');
var less      = require('gulp-less');

var browserSync = require('browser-sync');

gulp.task('less', function () {
    gulp.src('./less/*.less')
        .pipe(less())
        .pipe(gulp.dest('./public/css'))
        .pipe(browserSync.reload({stream: true}));
});


