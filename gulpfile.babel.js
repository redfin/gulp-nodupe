let babel = require('gulp-babel');
let del = require('del');
let gulp = require('gulp');
let nsp = require('gulp-nsp');
let path = require('path');
let paths = require('./paths');
let rename = require('gulp-rename');

gulp.task('nsp', (cb) => nsp({package: path.resolve('package.json')}, cb));

gulp.task('compile', () => {
  gulp.src(paths.src)
    .pipe(babel())
    .pipe(rename('index.js'))
    .pipe(gulp.dest(paths.dest));
});

gulp.task('clean', () => {
  del([path.join(paths.dest, 'index.js')]).then(paths => {
    console.log('Deleted files and folders:\n', paths.join('\n'))
  })
});

gulp.task('prepublish', ['nsp', 'compile']);
