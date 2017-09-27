const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCss = require('gulp-clean-css');
const watch = require('gulp-watch');
const autoprefixer = require('gulp-autoprefixer');

const paths = {
  sass: './assets/sass/**/*.scss',
};

function error(error) {
  console.log(error.toString());
  
  this.emit('end');
}

gulp.task('compileCss', () => {
  return gulp.src(paths.sass)
    .pipe(sass()).on('error', error)
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    })).on('error', error)
    .pipe(cleanCss()).on('error', error)
    .pipe(gulp.dest('./static/css'))
});

gulp.task('default', ['compileCss'], () => {
  gulp.watch(paths.sass, ['compileCss']);
});
