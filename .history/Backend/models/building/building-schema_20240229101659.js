const mongoose = require('mongoose');

const buildingSchema = new mongoose.Schema({
    owner_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    building_name: {
        type: String,
        required: true
    },
    spaces: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Space'
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