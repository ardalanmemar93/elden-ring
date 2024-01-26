const Concept = require('./concept.model');

const getConcepts = async (req, res) => {
  try {
    const concepts = await Concept.find();
    res.json(concepts);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getConcepts,
};
