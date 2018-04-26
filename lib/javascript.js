const gulp = require('gulp');
const outputDir = './web/assets/javascript';

module.exports = function() {

  gulp.src('./src/assets/javascript/**/*.js')
  .pipe(gulp.dest(outputDir));

  gulp.src('./node_modules/videojs-resolution-switcher/lib/*.js')
  .pipe(gulp.dest(outputDir));

};
