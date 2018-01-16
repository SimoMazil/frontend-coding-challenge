var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('sass', function (done) {
    gulp.src('sass/imports.sass')
        .pipe(sass({includePaths: ['sass']}))
        .pipe(gulp.dest('css'));
        done();
});

// Reload all Browsers
gulp.task('bs-reload', function (done) {
    browserSync.reload();
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
    gulp.watch("index.html", gulp.series("bs-reload"));
    done();
}));
