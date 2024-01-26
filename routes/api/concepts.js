const express = require('express');
const router = express.Router();
const conceptsController = require('./concepts.controller');

// GET /concepts
router.get('/concepts', conceptsController.getConcepts);

module.exports = router;
