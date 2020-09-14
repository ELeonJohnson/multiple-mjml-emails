const gulp = require('gulp');
const mjml = require('gulp-mjml');


gulp.task('default', function () {
    return gulp.src('*mjml')
      .pipe(mjml())
      .pipe(gulp.dest('./html'))
  });
