var createAssigner = require('./private/createAssigner.js');
var _keys = require('./keys.js');

// Assigns a given object with all the own properties in the passed-in object(s).
// (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
module.exports = createAssigner(_keys);
