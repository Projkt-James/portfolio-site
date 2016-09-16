'use strict';

var gulp = require('gulp');

function handleError(error) {
    console.log(error);
    this.emit('end');
}

// Style Task
// Compiles Sass Code to css directory 
gulp.task('styles', function() {
    var sass = require('gulp-sass');
    var autoprefixer = require('gulp-autoprefixer');

    gulp.src('scss/**/*.scss')
        .pipe(sass()).on('error', handleError)
        .pipe(autoprefixer('> 5%'))
        .pipe(gulp.dest('css/'));
});


// Watch Task 
// Watches for changes and triggers style task 
gulp.task('watch', function() {
    gulp.watch('scss/*.scss', ['styles']);
});


gulp.task('default', ['watch']);