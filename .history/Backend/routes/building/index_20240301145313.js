const express = require('express');
const router = express.Router();
const {
    createBuilding,
    getAllBuildings,
    getBuildingById,
    updateBuildingById,
    deleteBuildingById,
} = require('./buildingController');

router.post('/buildings', createBuilding);
router.get('/buildings/:id', getBuilding);
router.put('/buildings/:id', updateBuilding);
router.delete('/buildings/:id', deleteBuilding);

module.exports = router;