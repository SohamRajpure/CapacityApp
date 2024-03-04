const mongoose = require("mongoose");
const spaceSchema = require("./building-schema");

const building = mongoose.model("buildings", buildingSchema);

module.exports = building;