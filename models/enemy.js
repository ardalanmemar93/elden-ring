const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const enemySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Enemy = mongoose.model('Enemy', enemySchema);

module.exports = Enemy;
