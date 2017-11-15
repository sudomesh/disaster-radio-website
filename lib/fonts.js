const gulp = require('gulp');

module.exports = () => gulp.src('./src/assets/fonts/**/*.*')
  .pipe(gulp.dest('./web/assets/fonts'));
