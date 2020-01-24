const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const gulp = require('gulp');
const less = require('gulp-less');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');

const onStreamError = require('../lib/on-stream-error');
const paths = require('../lib/paths');

gulp.src(paths.src + 'index.less')
	.pipe(plumber())
	.pipe(sourcemaps.init())
	.pipe(less())
	.on('error', onStreamError)
	.pipe(autoprefixer())
	.pipe(cleanCss())
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest(paths.static));
