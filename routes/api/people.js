const express = require('express');
const router = express.Router();
const peopleController = require('./people.controller');

// GET /people
router.get('/people', peopleController.getPeople);

module.exports = router;
