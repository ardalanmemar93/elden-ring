const express = require('express');
const router = express.Router();
const enemiesController = require('./enemies.controller');

// GET /enemies
router.get('/enemies', enemiesController.getEnemies);

module.exports = router;
