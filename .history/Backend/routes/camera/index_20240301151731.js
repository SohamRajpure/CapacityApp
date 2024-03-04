const express = require('express');
const router = express.Router();
const {
    getAllCameras,
    getCameraById,
    createCamera,
    updateCameraById,
    deleteCameraById
} = require('./cameraController');

// Routes for cameras
router.get('/cameras', getAllCameras);
router.get('/cameras/:id', getCameraById);
router.post('/cameras', createCamera);
router.put('/cameras/:id', updateCameraById);
router.delete('/cameras/:id', deleteCameraById);

module.exports = router;
