const Message = require('../../models/message');

const createMessage = async (req, res) => {
  try {
    // Log the received request data
    console.log(`[${new Date()}] Received request to /api/messages:`, req.body);

    // Ensure all required fields are present
    const { template, additionalTemplate, additionalWords } = req.body;

    if (!template || !additionalTemplate || !additionalWords) {
      return res.status(400).json({ error: 'Invalid request data. Please provide all required fields.' });
    }

    // Create a new message
    const newMessage = new Message({
      template,
      word: req.body.word || '',
      phrases: {
        beforeTemplate: additionalTemplate,
        afterTemplate: additionalWords,
      },
    });

    // Log before saving to the database
    console.log('About to save the message to the database:', newMessage);

    // Save the message to the database
    const savedMessage = await newMessage.save();

    // Log after saving to the database
    console.log('Message saved to the database:', savedMessage);

    // Respond with the saved message
    res.status(201).json(savedMessage);
  } catch (error) {
    console.error('Error creating message:', error);

    if (error.name === 'ValidationError') {
      return res.status(400).json({ error: 'Validation Error', details: error.errors });
    }

    res.status(500).json({ error: 'Internal Server Error. Please try again later.' });
  }
};

module.exports = {
  createMessage,
};
