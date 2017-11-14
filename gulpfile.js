// Does not work right now. Is being refactored.

const gulp = require('gulp');
const markdown = require('./lib/markdown');

gulp.task('markdown', markdown);

gulp.task('sass', () => gulp.src('./src/assets/stylesheets/**/*.css')
  .pipe(gulp.dest('./web/assets/stylesheets')));

gulp.task('js', () => gulp.src('./src/assets/javascript/**/*.js')
  .pipe(gulp.dest('./web/assets/javascript')));

gulp.task('images', () => gulp.src('./src/assets/images/**/*.*')
  .pipe(gulp.dest('./web/assets/images')));

gulp.task('files', () => gulp.src('./src/assets/files/**/*.*')
  .pipe(gulp.dest('./web/assets/files')));

gulp.task('init', () => {
  // We will need this later.
});

gulp.task('default', ['markdown', 'sass', 'js', 'images', 'files']);
