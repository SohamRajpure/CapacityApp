const mongoose = require('mongoose');
const schemaType = require("../../types");

const spaceSchema = new mongoose.Schema({
    parent_building: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    cameras: [{ //array of camera ids
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Camera'
    }],
    num_entrances: {
        type: Number,
        required: true
    },
    max_occupancy: {
        type: Number,
        required: true
    },
    curr_occupancy: {
        type: Number,
        required: true
    },
    hours_open: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    is_open: {
        type: Boolean,
        required: true
    },
    website_url: {
        type: String,
        required: false
    }
});

module.exports = spaceSchema;