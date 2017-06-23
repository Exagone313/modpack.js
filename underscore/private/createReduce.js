var isArrayLike = require('./isArrayLike.js');
var optimizeCb = require('./optimizeCb.js');
var _keys = require('../keys.js');

// Create a reducing function iterating left or right.
module.exports = function(dir) {
	// Wrap code that reassigns argument variables in a separate function than
	// the one that accesses `arguments.length` to avoid a perf hit. (#1991)
	var reducer = function(obj, iteratee, memo, initial) {
		var keys = !isArrayLike(obj) && _keys(obj),
				length = (keys || obj).length,
				index = dir > 0 ? 0 : length - 1;
		if (!initial) {
			memo = obj[keys ? keys[index] : index];
			index += dir;
		}
		for (; index >= 0 && index < length; index += dir) {
			var currentKey = keys ? keys[index] : index;
			memo = iteratee(memo, obj[currentKey], currentKey, obj);
		}
		return memo;
	};

	return function(obj, iteratee, memo, context) {
		var initial = arguments.length >= 3;
		return reducer(obj, optimizeCb(iteratee, context, 4), memo, initial);
	};
};
