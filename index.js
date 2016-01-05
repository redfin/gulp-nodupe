'use strict';

var gutil = require('gulp-util');
var PluginError = gutil.PluginError;
var through = require('through2');

var PLUGIN_NAME = 'gulp-break-on-duplicate-svg';

var svgs = new Set();

function isDuplicate(file) {

	if (svgs.has(file.contents.toString('utf8'))) {
		return true;
	}

	svgs.add(file.contents.toString('utf8'));

	return false;
}

function breakOnDuplicateSvg() {
	return through.obj(function (file, encoding, callback) {
		if (isDuplicate(file)) {
			callback(new PluginError(PLUGIN_NAME, "SVG Store contains duplicate element: " + file.path), null);
		} else {
			callback(null, file);
		}
	});
};

module.exports = breakOnDuplicateSvg;