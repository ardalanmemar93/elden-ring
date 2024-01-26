const BattleTactic = require('./battle-tactic.model');

const getBattleTactics = async (req, res) => {
  try {
    const battleTactics = await BattleTactic.find();
    res.json(battleTactics);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getBattleTactics,
};
