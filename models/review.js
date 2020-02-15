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
    type: Float32Array,
    required: true
  },
  //Creator (DB id)
  user: {
    type: Schema.Types.ObjectId,
    ref: "user"
  }
});

// Export the model
module.exports = mongoose.model("review", reviewSchema);
