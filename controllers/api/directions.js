const Direction = require('./direction.model');

const getDirections = async (req, res) => {
  try {
    const directions = await Direction.find();
    res.json(directions);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getDirections,
};
