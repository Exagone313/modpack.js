var optimizeCb = require('./optimizeCb.js');
var _isFunction = require('../isFunction.js');
var _isObject = require('../isObject.js');
var _matcher = require('../matcher.js');
var _property = require('../property.js');

// An internal function to generate callbacks that can be applied to each
// element in a collection, returning the desired result — either `identity`,
// an arbitrary callback, a property matcher, or a property accessor.
module.exports = function(value, context, argCount) {
	if (value == null) return function(_value) {
		return _value;
	};
	if (_isFunction(value)) return optimizeCb(value, context, argCount);
	if (_isObject(value) && !Array.isArray(value)) return _matcher(value);
	return _property(value);
};
