const express = require('express');
const router = express.Router();
const placesController = require('./places.controller');

// GET /places
router.get('/places', placesController.getPlaces);

module.exports = router;
