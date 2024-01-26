const mongoose = require('mongoose');

const directionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Direction = mongoose.model('Direction', directionSchema);

module.exports = Direction;
