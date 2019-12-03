const gulp = require('gulp')
const babel = require('gulp-babel')
const strip = require('gulp-strip-comments')

const babelOptions = {
  plugins: ['transform-object-assign'],
  presets: ['env', 'react', 'stage-0'],
}

gulp.task('source-js', function() {
  return gulp
    .src(['./src/**/*.js'])
    .pipe(babel(babelOptions))
    .pipe(strip())
    .pipe(gulp.dest('./lib/'))
})

gulp.task('default', gulp.series('source-js'))
