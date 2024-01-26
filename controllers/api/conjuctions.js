const Conjunction = require('./conjunction.model');

const getConjunctions = async (req, res) => {
  try {
    const conjunctions = await Conjunction.find();
    res.json(conjunctions);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getConjunctions,
};
