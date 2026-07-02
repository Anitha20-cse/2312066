const express = require("express");
const router = express.Router();
const { logData } = require("../Controller/logController");
router.post("/", logData);
module.exports = router;