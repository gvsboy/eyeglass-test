var Eyeglass = require('eyeglass').Eyeglass,
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    options = {
      includePaths: [
        'bower_components'
      ]
    },
    eyeglass = new Eyeglass(options);

gulp.task('default', function() {
  gulp
    .src('src/scss/main.scss')
    .pipe(sass(eyeglass.sassOptions())) // Ka-boom. However, this works: .pipe(sass(options))
    .pipe(gulp.dest('dist'));
});
