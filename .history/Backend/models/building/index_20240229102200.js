const mongoose = require("mongoose");
const buildingSchema = require("./building-schema");

const building = mongoose.model("buildings", buildingSchema);

module.exports = building;