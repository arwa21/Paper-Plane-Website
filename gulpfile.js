// grab our gulp packages
var gulp  = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');


gulp.task('default', function() {
    gulp.watch('src/sass/**/*.scss', ['build-css', 'minify-css']);
});
gulp.task('build-css', function() {
    return gulp.src('src/sass/main.scss')
      .pipe(sass())
      .pipe(gulp.dest('src/css'));
  });
  
  gulp.task('minify-css', ['build-css'], function() {
    return gulp.src(['src/css/*.css', '!src/css/*.min.css'])
      .pipe(cssmin())
      .pipe(rename({suffix: '.min'})) 
      .pipe(gulp.dest('src/css'));
  });
  