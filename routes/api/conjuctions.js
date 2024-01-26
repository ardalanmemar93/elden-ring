const express = require('express');
const router = express.Router();
const conjunctionsController = require('./conjunctions.controller');

// GET /conjunctions
router.get('/conjunctions', conjunctionsController.getConjunctions);

module.exports = router;
