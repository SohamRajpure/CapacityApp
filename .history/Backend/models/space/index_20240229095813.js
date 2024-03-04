const mongoose = require("mongoose");
const spaceSchema = require("./space-schema");

const space = mongoose.model("spaces", spaceSchema);

module.exports = space;