const mongoose = require('mongoose');

const conjunctionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Conjunction = mongoose.model('Conjunction', conjunctionSchema);

module.exports = Conjunction;
