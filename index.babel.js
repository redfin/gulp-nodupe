let gutil = require('gulp-util');
let PluginError = gutil.PluginError;
let through = require('through2');
let crypto = require('crypto');

const PLUGIN_NAME = 'gulp-nodupe';

let files = new Set();

function isDuplicate(hash) {

  if (files.has(hash)) {
    return true;
  }

  files.add(hash);

  return false;
}

function nodupe() {
  return through.obj((file, encoding, callback) => {
    let md5 = crypto.createHash('md5');
    md5.update(file.contents.toString('utf8'))
    var hash = md5.digest('hex');
    if (isDuplicate(hash)) {
      callback(new PluginError(PLUGIN_NAME, "Stream contains duplicate element: " + file.path), null);
    } else {
      callback(null, file);
    }
  });
};

module.exports = nodupe;
