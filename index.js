const express = require('express');
require('./services/passport');

const app = express();

// this require returns a function, then invoked with app passed in
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
