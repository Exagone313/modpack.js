// Shortcut function for checking if an object has a given property directly
// on itself (in other words, not on a prototype).
module.exports = function(obj, path) {
	if (!Array.isArray(path)) {
		return obj != null && Object.prototype.hasOwnProperty.call(obj, path);
	}
	var length = path.length;
	for (var i = 0; i < length; i++) {
		var key = path[i];
		if (obj == null || !Object.prototype.hasOwnProperty.call(obj, key)) {
			return false;
		}
		obj = obj[key];
	}
	return !!length;
}
