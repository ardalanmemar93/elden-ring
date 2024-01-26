const mongoose = require('mongoose');

const phraseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Phrase = mongoose.model('Phrase', phraseSchema);

module.exports = Phrase;
