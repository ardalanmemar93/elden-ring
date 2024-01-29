// messageController.js
const Message = require('../../models/message');

const createMessage = async (req, res) => {
  try {
    // Log the received request data
    console.log(`[${new Date()}] Received request to /api/messages:`, req.body);

    // Ensure all required fields are present
    const { template, words, conjunctions, additionalTemplate, additionalWords } = req.body;

    if (!template || !additionalTemplate || !additionalWords) {
      return res.status(400).json({ error: 'Invalid request data. Please provide all required fields.' });
    }

    // Create a new message
    const newMessage = new Message({
      template,
      words,
      conjunctions,
      additionalTemplate,
      additionalWords,
    });

    // Save the message to the database
    const savedMessage = await newMessage.save();

    // Respond with the saved message
    res.status(201).json(savedMessage);
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ error: 'Validation Error', details: error.errors });
    }

    res.status(500).json({ error: 'Internal Server Error. Please try again later.' });
  }
};

const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find();

    res.status(200).json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createMessage,
  getAllMessages,
};
