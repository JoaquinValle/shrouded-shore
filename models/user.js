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
  //Saved collections of games (DB ids)
  collecitions: [{
    type: Schema.Types.ObjectId,
    ref: "collection"
  }]
});

// Export the model
module.exports = mongoose.model("user", userSchema);