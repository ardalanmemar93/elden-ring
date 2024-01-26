const express = require('express');
const router = express.Router();
const directionsController = require('./directions.controller');

// GET /directions
router.get('/directions', directionsController.getDirections);

module.exports = router;
