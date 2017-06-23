var createReduce = require('./private/createReduce.js');

// **Reduce** builds up a single result from a list of values, aka `inject`,
// or `foldl`.
module.exports = createReduce(1);
