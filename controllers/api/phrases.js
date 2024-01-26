const Phrase = require('./phrase.model');

const getPhrases = async (req, res) => {
  try {
    const phrases = await Phrase.find();
    res.json(phrases);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getPhrases,
};
