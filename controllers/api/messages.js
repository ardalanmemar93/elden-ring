const Message = require('../models/message');

// Controller function to handle message creation
const createMessage = async (req, res) => {
  try {
    // Create a new message based on the request body
    const newMessage = new Message(req.body);

    // Save the message to the database
    const savedMessage = await newMessage.save();

    res.status(201).json(savedMessage);
  } catch (error) {
    console.error('Error creating message:', error.message || error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createMessage,
};
