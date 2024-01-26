const express = require('express');
const router = express.Router();
const bodyPartsController = require('./body-parts.controller');

// GET /body-parts
router.get('/body-parts', bodyPartsController.getBodyParts);

module.exports = router;
