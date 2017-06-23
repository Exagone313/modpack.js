// Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError, isMap, isWeakMap, isSet, isWeakSet.
module.exports = function(name, obj) {
	return Object.prototype.toString.call(obj) === '[object ' + name + ']';
};
