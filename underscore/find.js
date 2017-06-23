var isArrayLike = require('./private/isArrayLike.js');
var _findIndex = require('./findIndex.js');
var _findKey = require('./findKey.js');

// Return the first value which passes a truth test. Aliased as `detect`.
module.exports = function(obj, predicate, context) {
	var keyFinder = isArrayLike(obj) ? _findIndex : _findKey;
	var key = keyFinder(obj, predicate, context);
	if (key !== void 0 && key !== -1) return obj[key];
};
