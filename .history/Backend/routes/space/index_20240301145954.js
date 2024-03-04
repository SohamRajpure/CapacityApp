const express = require('express');
const spaceController = require('../../controllers/spaceController');

const router = express.Router();

// Define your routes here
router.get('/', spaceController.getAllSpaces);
router.get('/:id', spaceController.getSpaceById);
router.post('/', spaceController.createSpace);
router.put('/:id', spaceController.updateSpace);
router.delete('/:id', spaceController.deleteSpace);

module.exports = router;