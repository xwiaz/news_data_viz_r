// site News Data Viz (NDV)

// ***VARS ***

var gulp = require('gulp'),
	gutil = require('gulp-util'),
	concat = require('gulp-concat'),
	connect = require('gulp-connect'),
	sass = require('gulp-sass');
	

// *** PATHS ***

var scss = 'process/scss/';
var dev ='dev/css/';
var dist ='distro/css/';

var jsSrc = [
	'process/js/js01.js',
	'process/js/js02.js'
];

// *** TASKS ***

gulp.task('log', function(){
	gutil.log('GULP');
});

gulp.task('styles', function(){
	return gulp.src(scss + "style.scss")
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(dev))
		.pipe(gulp.dest(dist))
		.pipe(connect.reload())
});

gulp.task('js', function(){
	gulp.src('process/js/*.js')
		.pipe(concat('script.js'))
		.pipe(gulp.dest('dev/js'))
		.pipe(connect.reload())
});

gulp.task('watch', function(){
	gulp.watch(scss + '**/*.scss', ['styles']);
	gulp.watch('process/js/*.js', ['js']);
});

gulp.task('connect', function(){
	connect.server({
		root : 'dev',
		livereload: true
	});
});

gulp.task('default', ['log', 'styles', 'js', 'connect', 'watch']);