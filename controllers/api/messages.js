const Message = require('../../models/message');

const createMessage = async (req, res) => {
  try {
    console.log(`[${new Date()}] Request Body:`, req.body);

    // Ensure all required fields are present
    const { template, additionalTemplate, additionalWords } = req.body;
    console.log('Fields:', template, additionalTemplate, additionalWords);

    if (!template || !additionalTemplate || !additionalWords) {
      return res.status(400).json({ error: 'Invalid request data. Please provide all required fields.' });
    }

    // Create a new message
    const newMessage = new Message({
      template,
      word: req.body.word || '', // Assuming this is optional
      phrases: {
        beforeTemplate: additionalTemplate,
        afterTemplate: additionalWords,
      },
    });

    console.log(`[${new Date()}] New Message:`, newMessage);

    // Save the message to the database
    const savedMessage = await newMessage.save();

    console.log(`[${new Date()}] Saved Message:`, savedMessage);

    // Respond with the saved message
    res.status(201).json(savedMessage);
  } catch (error) {
    console.error(`[${new Date()}] Error creating message:`, error);

    if (error.name === 'ValidationError') {
      console.error(`[${new Date()}] Validation Errors:`, error.errors);
      return res.status(400).json({ error: 'Validation Error', details: error.errors });
    }

    console.error(`[${new Date()}] Unexpected Error:`, error);

    res.status(500).json({ error: 'Internal Server Error. Please try again later.' });
  }
};

module.exports = {
  createMessage,
};
