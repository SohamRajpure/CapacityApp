const mongoose = require('mongoose');
const schemaType = require("../../types");

const cameraSchema = new mongoose.Schema({
    _id: { 
        type: schemaType.ObjectID,
        required: true
    },
    entrance_type: { 
        type: schemaType.TypeString,
        required: true
    },
    direction_in: {
        type: schemaType.TypeString,
        required: true
    },
    direction_out: {
        type: schemaType.TypeString,
        required: true
    },
    parent_space: {
        type: schemaType.ObjectID,
        ref: "space-schema",
        required: true
    },
    feed_format: {
        type: schemaType.TypeString,
        required: true
    }
});

module.exports = cameraSchema;