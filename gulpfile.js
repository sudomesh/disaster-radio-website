const webserver = require('gulp-webserver');
const del = require('del');
const files = require('./lib/files');
const fonts = require('./lib/fonts');
const gulp = require('gulp');
const images = require('./lib/images');
const init = require('./lib/init');
const javascript = require('./lib/javascript');
const markdown = require('./lib/markdown');
const sass = require('./lib/sass');

gulp.task('files', ['clean:files'], files);
gulp.task('clean:files', () => del(['web/assets/files']));

gulp.task('fonts', ['clean:fonts'], fonts);
gulp.task('clean:fonts', () => del(['web/assets/fonts']));

gulp.task('images', ['clean:images'], images);
gulp.task('clean:images', () => del(['web/assets/images']));

gulp.task('init', init);

gulp.task('js', ['clean:js'], javascript);
gulp.task('clean:js', () => del(['web/assets/javascript']));

gulp.task('markdown', ['clean:html'], markdown);
gulp.task('clean:html', () => del(['./web/**/*', '!./web/assets', '!./web/assets/**/*']));

gulp.task('sass', ['clean:css'], sass);
gulp.task('clean:css', () => del(['./web/assets/stylesheets']));

gulp.task('clean', ['clean:files', 'clean:images', 'clean:js', 'clean:html', 'clean:css']);

gulp.task('default', ['markdown', 'sass', 'js', 'images', 'files', 'fonts']);

gulp.task('webserver', function() {
  gulp.src('./web')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});
