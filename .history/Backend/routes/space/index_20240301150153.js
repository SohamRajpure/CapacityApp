const express = require('express');
const router = express.Router();
const {
    createSpace,
    getAllSpaces,
    getSpaceById,
    updateSpaceById,
    deleteSpaceById
} = require('../routes/spaceController');

// Routes for spaces
router.post('/spaces', createSpace);
router.get('/spaces', getAllSpaces);
router.get('/spaces/:id', getSpaceById);
router.put('/spaces/:id', updateSpaceById);
router.delete('/spaces/:id', deleteSpaceById);

module.exports = router;
