const mongoose = require('mongoose');
const schemaType = require("../../types");

const buildingSchema = new mongoose.Schema({
    _id: {
        type: schemaType.ObjectID,
        required: true
    },
    owner_id: { //id of the user who owns the building
        type: schemaType.ObjectID,
        ref: "user-schema",
        required: true
    },
    building_name: {
        type: schemaType.TypeString,
        required: true
    },
    spaces: [{ //array of space ids
        type: schemaType.ObjectID,
        ref: "space-schema",
        required: true
    }],
    num_spaces: {
        type: schemaType.TypeNumber,
        required: true
    },
    address_location: {
        type: schemaType.TypeString,
        required: true
    },
    hours_open: {
        type: schemaType.TypeDate,
        required: true
    },
    hours_close: {
        type: schemaType.TypeDate,
        required: true
    },
    description: {
        type: schemaType.TypeString,
        required: true
    },
    is_open: {
        type: schemaType.TypeBoolean,
        required: true
    },
    website_url: {
        type: schemaType.TypeString,
        required: true
    }
});

module.exports = buildingSchema;