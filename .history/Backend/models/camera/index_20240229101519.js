const mongoose = require("mongoose");
const spaceSchema = require("./camera-schema");

const camera = mongoose.model("cameras", spaceSchema);

module.exports = camera;