var _isObject = require('./isObject.js');

// Retrieve the names of an object's own properties.
// Delegates to **ECMAScript 5**'s native `Object.keys`.
module.exports = function(obj) {
	if (!_isObject(obj)) return [];
	return Object.keys(obj);
};
