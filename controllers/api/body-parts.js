const BodyPart = require('./body-part.model');

const getBodyParts = async (req, res) => {
  try {
    const bodyParts = await BodyPart.find();
    res.json(bodyParts);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getBodyParts,
};
