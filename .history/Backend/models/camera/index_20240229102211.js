const mongoose = require("mongoose");
const cameraSchema = require("./camera-schema");

const camera = mongoose.model("cameras", cameraSchema);

module.exports = camera;