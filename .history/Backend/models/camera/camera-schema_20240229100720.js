const mongoose = require('mongoose');
const schemaType = require("../../types");

const cameraSchema = new mongoose.Schema({
    _id: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true
    },
    entrance_type: { 
        type: String,
        required: true
    },
    direction_in: {
        type: String,
        required: true
    },
    direction_out: {
        type: String,
        required: true
    },
    parent_entrance: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    feed_format: {
        type: String,
        required: true
    }
});

const Camera = mongoose.model('cameras', cameraSchema);

module.exports = cameraSchema;