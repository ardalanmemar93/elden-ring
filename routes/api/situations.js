const express = require('express');
const router = express.Router();
const situationsController = require('./situations.controller');

// GET /situations
router.get('/situations', situationsController.getSituations);

module.exports = router;
