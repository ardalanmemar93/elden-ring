const express = require('express');
const router = express.Router();
const templatesController = require('./template.controller');

// GET /templates
router.get('/templates', templatesController.getTemplates);

module.exports = router;

