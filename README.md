# Overview

Breaks a gulp stream if a duplicate files are piped through it.  Similar to [gulp-dedupe](https://www.npmjs.com/package/gulp-dedupe), but intended to be used when the duplicate has to be removed by a human, rather than automatically.

# USAGE

It couldn't be simpler -- just add it to your pipe.

    var gulp = require('gulp');
    var nodupe = require('nodupe');

    gulp.task('breakOnDuplicates', function() {
      gulp.src('path/to/*.glob')
        .pipe(nodupe())
        .pipe(gulp.dest('path/to/dist'));
    });

Takes no options.
