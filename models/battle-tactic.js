const mongoose = require('mongoose');

const battleTacticSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const BattleTactic = mongoose.model('BattleTactic', battleTacticSchema);

module.exports = BattleTactic;
