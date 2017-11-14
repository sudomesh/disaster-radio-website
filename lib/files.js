const gulp = require('gulp');

module.exports = () => gulp.src('./src/assets/files/**/*.*')
  .pipe(gulp.dest('./web/assets/files'));
