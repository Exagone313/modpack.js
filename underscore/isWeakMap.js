var is = require('./private/is.js');

module.exports = function(obj) {
	return is('WeakMap', obj);
}
