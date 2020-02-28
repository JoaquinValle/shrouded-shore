// Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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