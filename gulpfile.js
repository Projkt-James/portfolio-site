'use strict';

var gulp = require('gulp'),                             
    sass = require('gulp-sass'),                        
    autoprefixer = require('gulp-autoprefixer'),        
    notify = require('gulp-notify'),                    
    plumber = require('gulp-plumber');


var target = {
    sass_src  : 'scss/**/*.scss',
    css_dest : 'css/',
};


// Style Task
// Compiles Sass Code to css directory 
gulp.task('styles', function() {
    gulp.src(target.sass_src)
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer(
            'last 2 versions', 
            '> 5%', 
            'ie 8',
            'ie 9'
        ))
        .pipe(gulp.dest(target.css_dest))
        .pipe(notify({message: 'SCSS Processed!'}));
});


// Watch Task 
// Watches for changes and triggers gulp task
gulp.task('watch', function() {
    gulp.watch(target.sass_src, ['styles']);
});


//Default Gulp Task
gulp.task('default', ['watch']);