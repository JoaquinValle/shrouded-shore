// Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema declaration
const collectionSchema = new Schema({
    //Name of collection
    name: {
        type: String,
        required: true
    },
    //Games in collection (API ids)
    games: [{
        type: String,
        required: true
    }]
});

// Export the model
module.exports = mongoose.model("collection", collectionSchema);
