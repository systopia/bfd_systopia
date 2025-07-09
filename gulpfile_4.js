/**
 * @file
 * Provides Gulp configurations and tasks for Bootstrap for Drupal theme.
 * gulp: ^4.x
 */
'use strict';
const { src, watch, series, parallel, dest } = require('gulp');
// browserSync has issues with current versions.
// const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');


function scssTask(){
        return src('assets/scss/style.scss')
        //.pipe(sourcemaps.init())        
        .pipe(sass())        
        //.pipe(postcss([ autoprefixer(), cssnano() ]))        
        //.pipe(sourcemaps.write('.'))
        .pipe(autoprefixer())        
        .pipe(dest('assets/css')    );
      }

function watchTask(){    
  watch(        
    ['assets/scss/**/*.scss'],        
    parallel(scssTask)    );
}


exports.default = series( parallel(scssTask), watchTask);