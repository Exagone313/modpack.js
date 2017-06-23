var _extendOwn = require('./extendOwn.js');
var _isMatch = require('./isMatch.js');

// Returns a predicate for checking whether an object has a given set of
// `key:value` pairs.
module.exports = function(attrs) {
	attrs = _extendOwn({}, attrs);
	return function(obj) {
		return _isMatch(obj, attrs);
	};
};
