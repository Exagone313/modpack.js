var deepGet = require('./private/deepGet.js');
var shallowProperty = require('./private/shallowProperty.js');

module.exports = function(path) {
	if (!Array.isArray(path)) {
		return shallowProperty(path);
	}
	return function(obj) {
		return deepGet(obj, path);
	};
};
