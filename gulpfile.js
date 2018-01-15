'use-strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function(done) {
  gulp.src('./sass/*.sass').pipe(sass().on('error', sass.logError)).pipe(gulp.dest('./css'));
  done();
});
