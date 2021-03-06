var _keys = require('./keys.js');

// Returns whether an object has a given set of `key:value` pairs.
module.exports = function(object, attrs) {
	var keys = _keys(attrs), length = keys.length;
	if (object == null) return !length;
	var obj = Object(object);
	for (var i = 0; i < length; i++) {
		var key = keys[i];
		if (attrs[key] !== obj[key] || !(key in obj)) return false;
	}
	return true;
};
