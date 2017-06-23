var createReduce = require('./private/createReduce.js');

// The right-associative version of reduce, also known as `foldr`.
module.exports = createReduce(-1);
