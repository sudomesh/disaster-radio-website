const gulp = require('gulp');

module.exports = () => gulp.src('./src/assets/javascript/**/*.js')
  .pipe(gulp.dest('./web/assets/javascript'));
