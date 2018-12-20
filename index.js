const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);

const app = express();

// middlewares, they are small functions than can be used
// to modify incoming requests to our app before they
// are sent off to route handlers
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 2.592e9, // 30 days in ms
    keys: [keys.cookieKey] // encrypting cookie
  })
);
app.use(passport.initialize());
app.use(passport.session());

// this require returns a function, then invoked with app passed in
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
