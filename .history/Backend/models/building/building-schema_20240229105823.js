const mongoose = require('mongoose');

const buildingSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    owner_id: { //id of the user who owns the building
        type: schemaType.ObjectID,
        ref: "user-schema",
        required: true
    },
    building_name: {
        type: String,
        required: true
    },
    spaces: [{ //array of space ids
        type: schemaType.ObjectID,
        ref: "space-schema",
        required: true
    }],
    num_spaces: {
        type: Number,
        required: true
    },
    address_location: {
        type: String,
        required: true
    },
    hours_open: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    is_open: {
        type: Boolean,
        required: true
    },
    website_url: {
        type: String,
        required: true
    }
});

module.exports = buildingSchema;