// including plugins
var gulp = require('gulp');
var rename = require('gulp-rename');

// task
gulp.task('default', function () {
    gulp.src('test.txt') // path to your file
    .pipe(rename('test.csv')) // rename into "renamed.js" (original name "one.js")
    .pipe(gulp.dest('./'));
});