// Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { hashSync } = require('bcrypt');
// const { hash } = require('../utils/auth');

// Schema declaration
const userSchema = new Schema({
  //Username
  name: {
    type: String,
    required: true
  },
  //Mail (unique)
  mail: {
    type: String,
    required: true,
    index: true,
    unique: true
  },
  password: { 
    type: String, 
    required: true,
    set: val => hashSync(val, 10)
  },

  //Link to profile picture
  profilePicture: {
    type: String
  },
  //Array of liked games (API ids)
  likedGames: [{
    type: String
  }]
});

// Export the model
module.exports = mongoose.model("user", userSchema);
