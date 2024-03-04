const express = require("express");
const { tokenVerification } = require("../middleware");
const auth = require("./auth");
const user = require("./user-type");
const building = require("./building");
const space = require("./space");
const camera = require("./camera");
const router = express.Router();

// AUTH Routes * /api/auth/*
router.use("/auth", auth);
router.use("/user", user);
router.use("/building", building);
router.use("/space", space);
router.use("/camera", camera);

module.exports = router;
