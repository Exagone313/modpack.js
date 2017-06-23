var isArrayLike = require('./private/isArrayLike.js');
var optimizeCb = require('./private/optimizeCb.js');
var _keys = require('./keys.js');

// The cornerstone, an `each` implementation, aka `forEach`.
// Handles raw objects in addition to array-likes. Treats all
// sparse array-likes as if they were dense.
module.exports = function(obj, iteratee, context) {
	iteratee = optimizeCb(iteratee, context);
	var i, length;
	if (isArrayLike(obj)) {
		for (i = 0, length = obj.length; i < length; i++) {
			iteratee(obj[i], i, obj);
		}
	} else {
		var keys = _keys(obj);
		for (i = 0, length = keys.length; i < length; i++) {
			iteratee(obj[keys[i]], keys[i], obj);
		}
	}
	return obj;
};
