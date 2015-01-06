var gulp      = require('gulp');
var sass      = require('gulp-sass');

var browserSync = require('browser-sync');

gulp.task('sass', function () {
    gulp.src('./sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/css'))
        .pipe(browserSync.reload({stream: true}));
});


