/**
 * @file
 * Provides Gulp configurations and tasks for Bootstrap for Drupal theme.
 */
'use strict';
const { src, watch, series, parallel, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');


function scssTask() {
  return src('assets/scss/style.scss')
      //.pipe(sourcemaps.init())
      .pipe(sass())
      //.pipe(postcss([ autoprefixer(), cssnano() ]))
      //.pipe(sourcemaps.write('.'))
      .pipe(autoprefixer())
      .pipe(dest('assets/css'));
}

function watchTask() {
  watch(
      ['assets/scss/**/*.scss'],
      parallel(scssTask)
  );
}

exports.build = parallel(scssTask);
exports.watch = series(exports.build, watchTask);
exports.default = exports.watch;
