var cb = require('./private/cb.js');
var _keys = require('./keys.js');

// Returns the first key on an object that passes a predicate test.
module.exports = function(obj, predicate, context) {
	predicate = cb(predicate, context);
	var keys = _keys(obj), key;
	for (var i = 0, length = keys.length; i < length; i++) {
		key = keys[i];
		if (predicate(obj[key], key, obj)) return key;
	}
};
