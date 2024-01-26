const Situation = require('./situation.model');

const getSituations = async (req, res) => {
  try {
    const situations = await Situation.find();
    res.json(situations);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getSituations,
};
