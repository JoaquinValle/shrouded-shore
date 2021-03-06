// Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema declaration
const reviewSchema = new Schema({
  //Title of review
  title: {
    type: String,
    required: true
  },
  //Body of review
  text: {
    type: String,
    required: true
  },
  //Numeric rating (0-5)
  rating: {
    type: mongoose.Types.Decimal128,
    required: true
  },
  //Creator (DB id)
  user: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  //Game reviewed (API ids)
  game: {
    type: String,
    required: true
  }
});

// Export the model
module.exports = mongoose.model("review", reviewSchema);
