const Thing = require('./thing.model');

const getThings = async (req, res) => {
  try {
    const things = await Thing.find();
    res.json(things);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getThings,
};
