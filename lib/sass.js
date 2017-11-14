const gulp = require('gulp');
const sass = require('gulp-sass');
module.exports = () => gulp.src('./src/assets/stylesheets/**/*.scss')
  .pipe(sass(({outputStyle: 'compressed'})))
  .pipe(gulp.dest('./web/assets/stylesheets'));
