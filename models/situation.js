const mongoose = require('mongoose');

const situationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Situation = mongoose.model('Situation', situationSchema);

module.exports = Situation;
