const mongoose = require("mongoose");
const spaceSchema = require("./camera-schema");

const camera = mongoose.model("cameras", cameraSchema);

module.exports = camera;