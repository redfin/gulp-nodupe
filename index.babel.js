let gutil = require('gulp-util');
let PluginError = gutil.PluginError;
let through = require('through2');

const PLUGIN_NAME = 'gulp-break-on-duplicate-svg';

let svgs = new Set();

function isDuplicate(file) {

	if (svgs.has(file.contents.toString('utf8'))) {
		return true;
	}

	svgs.add(file.contents.toString('utf8'));

	return false;
}

function breakOnDuplicateSvg() {
	return through.obj((file, encoding, callback) => {
		if (isDuplicate(file)) {
			callback(new PluginError(PLUGIN_NAME, "SVG Store contains duplicate element: " + file.path), null);
		} else {
			callback(null, file);
		}
	});
};

module.exports = breakOnDuplicateSvg;
