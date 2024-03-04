const mongoose = require('mongoose');

const spaceSchema = new mongoose.Schema({
    parent_building: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    cameras: [{
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

const Space = mongoose.model('Space', spaceSchema);

module.exports = Space;