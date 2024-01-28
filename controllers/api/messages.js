const Message = require('../../models/message');

const createMessage = async (formData, res) => {
  try {
    // Ensure all required fields are present
    const { template, additionalTemplate, additionalWords } = formData;
    if (!template || !additionalTemplate || !additionalWords) {
      return res.status(400).json({ error: 'Invalid request data. Please provide all required fields.' });
    }

    // Create a new message
    const newMessage = new Message({
      template,
      word: formData.word || '', // Assuming this is optional
      phrases: {
        beforeTemplate: additionalTemplate,
        afterTemplate: additionalWords,
      },
    });

    // Save the message to the database
    const savedMessage = await newMessage.save();

    // Respond with the saved message
    res.status(201).json(savedMessage);
  } catch (error) {
    console.error(`[${new Date()}] Error creating message:`, error);
    
    if (error.name === 'ValidationError') {
      // Log validation errors for more details
      console.error(`[${new Date()}] Validation Errors:`, error.errors);
      return res.status(400).json({ error: 'Validation Error', details: error.errors });
    }

    // Log the error here as well
    console.error(`[${new Date()}] Unexpected Error:`, error);
    
    res.status(500).json({ error: 'Internal Server Error. Please try again later.' });
  }
};

module.exports = {
  createMessage,
};
