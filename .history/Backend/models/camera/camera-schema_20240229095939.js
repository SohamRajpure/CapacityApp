const mongoose = require('mongoose');

const cameraSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    entrance_type: String,
    direction_in: String,
    direction_out: String,
    parent_entrance: mongoose.Schema.Types.ObjectId,
    feed_format: String
});

const Camera = mongoose.model('Camera', cameraSchema);

module.exports = Camera;