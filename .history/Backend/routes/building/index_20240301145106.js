const express = require('express');
const router = express.Router();
const {
    createBuilding,
    getAllBuildings,
    getBuildingById,
    updateBuildingById,
    deleteBuildingById,
} = require('./buildingController');

router.post('/', createBuilding);