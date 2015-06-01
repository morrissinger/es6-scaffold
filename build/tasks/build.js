var gulp = require('gulp');
var runSequence = require('run-sequence');

var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var assign = Object.assign || require('object.assign');

var babel = require('gulp-babel');

var sass = require('gulp-sass');

var paths = require('../paths');
var compilerOptions = require('../babel-options');

gulp.task('build-system', function () {

    return gulp.src(paths.source)
        .pipe(plumber())
        .pipe(changed(paths.output, {extension: '.js'}))
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(babel(assign({}, compilerOptions, {modules:'system'})))
        .pipe(sourcemaps.write({includeContent: false, sourceRoot: paths.sourceMapRelativePath }))
        .pipe(gulp.dest(paths.output));

});

gulp.task('build-html', function () {

    return gulp.src(paths.html)
        .pipe(changed(paths.output, {extension: '.html'}))
        .pipe(gulp.dest(paths.output));

});

gulp.task('build-styles', function () {

    return gulp.src(paths.style)
        .pipe(plumber())
        .pipe(changed(paths.output, {extension: '.css'}))
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write({includeContent: false, sourceRoot: paths.sourceMapRelativePath }))
        .pipe(gulp.dest(paths.output));

});

gulp.task('build', function(callback) {
    return runSequence(
        'clean',
        ['build-system', 'build-html', 'build-styles'],
        callback
    );
});
