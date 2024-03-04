const Building = require('../building-schema');

// Create a new building
const createBuilding = async (req, res) => {
    try {
        const building = new Building(req.body);
        await building.save();
        res.status(201).json(building);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all buildings
const getAllBuildings = async (req, res) => {
    try {
        const buildings = await Building.find();
        res.json(buildings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single building by ID
const getBuildingById = async (req, res) => {
    try {
        const building = await Building.findById(req.params.id);
        if (!building) {
            return res.status(404).json({ error: 'Building not found' });
        }
        res.json(building);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a building by ID
const updateBuildingById = async (req, res) => {
    try {
        const building = await Building.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!building) {
            return res.status(404).json({ error: 'Building not found' });
        }
        res.json(building);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a building by ID
const deleteBuildingById = async (req, res) => {
    try {
        const building = await Building.findByIdAndDelete(req.params.id);
        if (!building) {
            return res.status(404).json({ error: 'Building not found' });
        }
        res.json({ message: 'Building deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createBuilding,
    getAllBuildings,
    getBuildingById,
    updateBuildingById,
    deleteBuildingById,
};