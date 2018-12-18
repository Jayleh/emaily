const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});

// tell mongoose to create new collection with the schema
// will not overwrite existing collections
mongoose.model('users', userSchema);
