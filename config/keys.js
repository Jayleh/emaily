if (process.env.NODE_ENV === 'production') {
  // in production mode - return production keys
  module.exports = require('./prod');
} else {
  // development mode - return dev keys
  module.exports = require('./dev');
}
