var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('sass', function (done) {
    gulp.src('sass/imports.sass')
        .pipe(sass({includePaths: ['sass']}))
        .pipe(gulp.dest('css'));
        done();
});

gulp.task('browser-sync', function(done) {
    browserSync.init(["css/*.css"], {
        server: {
            baseDir: "./"
        }
    });
    done();
});

gulp.task('default', gulp.series('sass', 'browser-sync', function(done) {
  gulp.watch("sass/*.sass", gulp.series("sass"));
  done();
}));
