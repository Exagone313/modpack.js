var cb = require('./private/cb.js');
var isArrayLike = require('./private/isArrayLike.js');
var _keys = require('./keys.js');

// Determine whether all of the elements match a truth test.
// Aliased as `all`.
module.exports = function(obj, predicate, context) {
	predicate = cb(predicate, context);
	var keys = !isArrayLike(obj) && _keys(obj),
			length = (keys || obj).length;
	for (var index = 0; index < length; index++) {
		var currentKey = keys ? keys[index] : index;
		if (!predicate(obj[currentKey], currentKey, obj)) return false;
	}
	return true;
};
