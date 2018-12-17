const passport = require('passport');

module.exports = app => {
  // route to place user into the oauth flow
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  // taking the code from google to passport to turn it into a user profile
  app.get('/auth/google/callback', passport.authenticate('google'));
};
