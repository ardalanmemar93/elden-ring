const Enemy = require('./enemy.model');

const getEnemies = async (req, res) => {
  try {
    const enemies = await Enemy.find();
    res.json(enemies);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getEnemies,
};
