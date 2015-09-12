'use strict';

var gulp = require('gulp'),
    clean = require('gulp-clean'),
    cleanhtml = require('gulp-cleanhtml'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    stripdebug = require('gulp-strip-debug'),
    uglify = require('gulp-uglify'),
    zip = require('gulp-zip');


//run scripts through JSHint
gulp.task('jshint', function() {
    return gulp.src('src/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

//build ditributable and sourcemaps after other tasks completed
gulp.task('zip', ['jshint'], function() {
    var manifest = require('./src/manifest'),
        distFileName = manifest.short_name + ' v' + manifest.version + '.zip';

    //build distributable extension
    return gulp.src(['src/**/*'], {base: '.'})
        .pipe(zip(distFileName))
        .pipe(gulp.dest('dist'));
});

//run all tasks after build directory has been cleaned
gulp.task('default', [], function() {
    gulp.start('zip');
});