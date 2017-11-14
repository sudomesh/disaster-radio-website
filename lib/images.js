const gulp = require('gulp');

module.exports = () => gulp.src('./src/assets/images/**/*.*')
  .pipe(gulp.dest('./web/assets/images'));
