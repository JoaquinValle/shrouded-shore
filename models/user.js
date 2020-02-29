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
  //Saved collections of games (DB ids)
  collections: [
    {
      type: Schema.Types.ObjectId,
      ref: "collection"
    }
  ]
});

// Export the model
module.exports = mongoose.model("user", userSchema);
