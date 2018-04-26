const gulp = require('gulp');
const sass = require('gulp-sass');
const outputDir = './web/assets/stylesheets';

module.exports = function() {

  gulp.src('./src/assets/stylesheets/**/*.scss')
    .pipe(sass(({outputStyle: 'compressed'})))
    .pipe(gulp.dest(outputDir));

  gulp.src('./node_modules/videojs-resolution-switcher/lib/*.css')
    .pipe(gulp.dest(outputDir));

}
