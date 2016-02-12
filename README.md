# Overview

Breaks a gulp stream if a duplicate files are piped through it.

# USAGE

It couldn't be simpler -- just add it to your pipe.

  var gulp = require('gulp');
  var breakOnDuplicateSvg = require('@redfin/gulp-break-on-duplicate-files');

  gulp.task('breakOnDuplicateFiles', function() {
    gulp.src('relative/path/to/*.glob')
      .pipe(breakOnDuplicateSvg())
      .pipe(gulp.dest('relative/path/to/dist'));
  });

Takes no options.  For a more involved example, see @redfin/svg.

# Contributing

Make sure it lints (`eslint ~/code/main/redfin.npm/redfin.gulp.generate-components`), and include [doug.wade@](mailto:doug.wade@redfin.com) on prs.
