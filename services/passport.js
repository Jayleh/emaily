const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users'); // sidestep issue of running tests instead of directly requiring in model

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback', // route to send user after user grants permission
      proxy: true // tells google strat to trust proxy and calc callbackURL correctly
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        return done(null, existingUser); // first arg is for errors, second is the user
      }

      // we don't have a user record with this ID, make new record
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
