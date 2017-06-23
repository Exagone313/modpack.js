var getLength = require('./shallowProperty.js')('length');

// Helper for collection methods to determine whether a collection
// should be iterated as an array or as an object.
// Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
// Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
module.exports = function(collection) {
	var length = getLength(collection);
	return typeof length == 'number' && length >= 0 && length <= Math.pow(2, 53) - 1;
};
