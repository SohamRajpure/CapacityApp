const mongoose = require("mongoose");
const schemaType = require("../../types");

const userTypeSchema = new mongoose.Schema(
  {
    type: {
      type: schemaType.TypeString,
      required: true,
    },
    status: {
      type: schemaType.TypeString,
      default: "Active",
    },
  },
  { timestamps: true }
);

const userType = mongoose.model("user-types", userTypeSchema);

module.exports = userType;
