const express = require('express');
const router = express.Router();
const thingsController = require('./things.controller');

// GET /things
router.get('/things', thingsController.getThings);

module.exports = router;
