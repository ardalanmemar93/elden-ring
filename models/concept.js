const mongoose = require('mongoose');

const conceptSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Concept = mongoose.model('Concept', conceptSchema);

module.exports = Concept;
