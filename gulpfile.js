// Does not work right now. Is being refactored.

const gulp = require('gulp');

gulp.task('render-html', () => {

  return gulp.src(['./pages/**/*.md', '!./pages/assets/*.md'])
    .pipe(renderer)
    .pipe(rename(path => replaceExt(path, '.md', '.html')))
    .pipe(gulp.dest(config.webroot, { mode: 'string' }));
});

gulp.task('x', () => {
  const md = require('./lib/index');
  gulp.src('./pages/**/*.md').pipe(md()).pipe(gulp.dest('./xxx'));
});
gulp.task('clean', () => {
  const data = require('gulp-data');
  return gulp.src(config.webroot).pipe(data((file) => {
    console.log(file);
    return;
  }));
});

gulp.task('init', () => {
  // We will need this later.
});

gulp.task('default', ['init', 'render-html']);
