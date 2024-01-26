const express = require('express');
const router = express.Router();
const battleTacticsController = require('./battle-tactics.controller');

// GET /battle-tactics
router.get('/battle-tactics', battleTacticsController.getBattleTactics);

module.exports = router;
