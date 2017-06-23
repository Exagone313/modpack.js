var cb = require('./private/cb.js');
var _each = require('./each.js');

// Return all the elements that pass a truth test.
// Aliased as `select`.
module.exports = function(obj, predicate, context) {
	var results = [];
	predicate = cb(predicate, context);
	_each(obj, function(value, index, list) {
		if (predicate(value, index, list)) results.push(value);
	});
	return results;
};
