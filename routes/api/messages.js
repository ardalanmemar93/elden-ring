const express = require('express');
const router = express.Router();

// Import the message controller
const messageController = require('../../controllers/api/messages');

// Define routes related to messages

// Route to create a new message
router.post('/', messageController.createMessage);

module.exports = router;
