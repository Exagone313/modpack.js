var isArrayLike = require('./private/isArrayLike.js');
var cb = require('./private/cb.js');
var _keys = require('./keys.js');

// Return the results of applying the iteratee to each element.
module.exports = function(obj, iteratee, context) {
	iteratee = cb(iteratee, context);
	var keys = !isArrayLike(obj) && _keys(obj),
			length = (keys || obj).length,
			results = Array(length);
	for (var index = 0; index < length; index++) {
		var currentKey = keys ? keys[index] : index;
		results[index] = iteratee(obj[currentKey], currentKey, obj);
	}
	return results;
};
