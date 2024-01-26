const express = require('express');
const router = express.Router();
const phrasesController = require('./phrases.controller');

// GET /phrases
router.get('/phrases', phrasesController.getPhrases);

module.exports = router;
