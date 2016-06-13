var fs          = require('fs');
var gulp        = require('gulp');
var path        = require('path');

var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var plugins     = require('gulp-load-plugins')();
var _           = require('lodash');

// var config = {
//    "project": { 
//         "name" : "My Project",
//         "greeting" : "Hello world!"
//     }, 
//     "navigation": {}
// };

var fileReadJSON = function(path) {
    try {
        var buf = fs.readFileSync(path);
        return JSON.parse(buf);
    } catch (ex) {
        console.log(ex);
        return null;
    }
};

var config = fileReadJSON('./config/default.json');
if (config === null) {
    console.log('Error reading config!');
    return;
}
//console.log('config: ', config);

// Using templates with data from data folder
gulp.task('jade', function() {
  gulp.src('./templates/*.jade')
    .pipe(plugins.data(function(file) {
        
        var pat = 'data/' + path.basename(file.path) + '.json';

        // check existence
        if (fs.existsSync('./' + pat)) {
          console.log('found pat : ' + pat);
          var json = require('../' + pat);

          // merge with config
          //var data = _.assign({}, config, json); // with lodash
          var data = Object.assign({}, config, json); // ES6
          return data;

        } else {
          return config;
        }
        
    }))
    .pipe(plugins.jade({
        pretty: true
    }))
    .pipe(gulp.dest('./public'))
    .pipe(browserSync.reload({stream: true}));
});

