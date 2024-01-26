const express = require('express');
const router = express.Router();
const actionsController = require('./actions.controller');

// GET /actions
router.get('/actions', actionsController.getActions);

module.exports = router;
