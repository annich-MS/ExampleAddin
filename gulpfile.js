var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var webpack = require('webpack-stream')(require('./webpack.config.js'));
var typescript = require('gulp-typescript').createProject('tsconfig.json');
var clientSrc = "src/client/**/*";
var serverSrc = "src/server/**/*";

gulp.task('server', () => {
	var result = gulp.src(serverSrc)
		.pipe(sourcemaps.init())
		.pipe(typescript());
	
	return result.js
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('bin/'));
})

gulp.task('client', () => {
	var result = gulp.src(clientSrc)
		.pipe(webpack)
		.pipe(gulp.dest('public/'));
})

gulp.task('watch', ['client', 'server'], () => {
	gulp.watch(clientSrc, ['client']);
	gulp.watch(serverSrc, ['server']);
})

gulp.task('default', ['client', 'server']);