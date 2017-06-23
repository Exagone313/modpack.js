// Is a given variable an object?
module.exports = function(obj) {
	var type = typeof obj;
	return type === 'function' || type === 'object' && !!obj;
};
