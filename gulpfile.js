/**
 * @file
 * Provides Gulp configurations and tasks for Bootstrap for Drupal theme.
 */
'use strict';
const gulp = require('gulp');
// browserSync has issues with current versions.
// const browserSync = require('browser-sync').create();
const sass = require('gulp-dart-sass');
const autoprefixer = require('gulp-autoprefixer');
// If present, require the `bfd_systopia_env` module which must define an export
// variable called `includePaths` to use for `gul-dart-sass` (see below).
const bfd_systopia_env = (() => {
  try {
    return require('bfd_systopia_env');
  }
  catch (e) {
    return {};
  }
})();

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], () => {
  // browserSync.init({
  //   proxy: 'http://YOUR--DEV-URL.COM'
  // });

  gulp
    .watch('assets/scss/**/*.scss', ['sass'])
    /*.on('change', browserSync.reload)*/;
});
// Compile sass into CSS & auto-inject into browsers.
gulp.task('sass', () =>
  gulp
  .src('assets/scss/style.scss')
  .pipe(sass({
    includePaths: bfd_systopia_env.includePaths
  }))
  .pipe(autoprefixer())
  .pipe(gulp.dest('assets/css'))
  // .pipe(browserSync.stream())
);

gulp.task('default', ['serve']);
