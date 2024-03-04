const mongoose = require("mongoose");
const spaceSchema = require("./camera-schema");

const space = mongoose.model("cameras", spaceSchema);

module.exports = camera;