const Camera = require('../../models/camera/camera-schema');

// Get all cameras
const getAllCameras = async (req, res) => {
    try {
        const cameras = await Camera.find();
        res.json(cameras);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Get a single camera by ID
const getCameraById = async (req, res) => {
    const { id } = req.params;
    try {
        const camera = await Camera.findById(id);
        if (!camera) {
            return res.status(404).json({ error: 'Camera not found' });
        }
        res.json(camera);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Create a new camera
const createCamera = async (req, res) => {
    const { entrance_type, direction_in, direction_out, parent_space, feed_format } = req.body;
    try {
        const camera = new Camera({
            entrance_type,
            direction_in,
            direction_out,
            parent_space,
            feed_format
        });
        await camera.save();
        res.status(201).json(camera);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update a camera by ID
const updateCameraById = async (req, res) => {
    const { id } = req.params;
    const { entrance_type, direction_in, direction_out, parent_space, feed_format } = req.body;
    try {
        const camera = await Camera.findByIdAndUpdate(
            id,
            {
                entrance_type,
                direction_in,
                direction_out,
                parent_space,
                feed_format
            },
            { new: true }
        );
        if (!camera) {
            return res.status(404).json({ error: 'Camera not found' });
        }
        res.json(camera);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Delete a camera by ID
const deleteCameraById = async (req, res) => {
    const { id } = req.params;
    try {
        const camera = await Camera.findByIdAndDelete(id);
        if (!camera) {
            return res.status(404).json({ error: 'Camera not found' });
        }
        res.json({ message: 'Camera deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getAllCameras,
    getCameraById,
    createCamera,
    updateCameraById,
    deleteCameraById
};