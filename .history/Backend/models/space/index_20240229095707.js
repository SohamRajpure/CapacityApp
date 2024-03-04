const mongoose = require('mongoose');

// Define the schema for the spaces collection
const spaceSchema = new mongoose.Schema({
    // Define your schema fields here
    // Example:
    name: {
        type: String,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    // Add more fields as needed
});

// Create the Spaces model using the schema
const Space = mongoose.model('Space', spaceSchema);

// Export the model
module.exports = Space;

const mongoose = require("mongoose");
const userSchema = require("./space-schema");

const user = mongoose.model("spaces", spaceSchema);

module.exports = space;