const passport = require('passport');

module.exports = app => {
  // route to place user into the oauth flow
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email', 'openid']
    })
  );

  // taking the code from google to passport to turn it into a user profile
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys');
    }
  );

  // logout route, killing cookie
  app.get('/api/logout', (req, res) => {
    req.logout(); // passport attaches functions to the req
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
