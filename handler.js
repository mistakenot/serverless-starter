'use strict';

module.exports.hello = function(event, context, cb) {
  cb(null, "world")
}
