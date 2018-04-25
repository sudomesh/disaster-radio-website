const gulp = require('gulp');

module.exports = function() {

  gulp.src('./src/assets/javascript/**/*.js')
  .pipe(gulp.dest('./web/assets/javascript'));

  gulp.src('./node_modules/videojs-resolution-switcher/lib/*.js')
  .pipe(gulp.dest('./web/assets/javascript'));

  gulp.src('./node_modules/videojs-resolution-switcher/lib/*.css')
  .pipe(gulp.dest('./web/assets/stylesheets'));
  
}
