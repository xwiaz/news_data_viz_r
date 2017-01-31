// site News Data Viz (NDV)

// ***VARS ***

var gulp = require('gulp'),
	gutil = require('gulp-util'),
	sass = require('gulp-sass');
	

// *** PATHS ***

var scss = 'process/scss/';
var dev ='dev/css/';
var dist ='distro/css/';

// *** TASKS ***

gulp.task('log', function(){
	gutil.log('GULP');
});

gulp.task('styles', function(){
	return gulp.src(scss + "style.scss")
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(dev))
		.pipe(gulp.dest(dist))
});

gulp.task('watch', function(){
	gulp.watch(scss + '**/*.scss', ['styles']);
});

gulp.task('default', ['log', 'styles', 'watch']);