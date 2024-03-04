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
router.post('/buildings', getAllBuildings);
router.get('/buildings/:id', getBuildingById);
router.put('/buildings/:id', updateBuildingById);
router.delete('/buildings/:id', deleteBuildingById);

module.exports = router;