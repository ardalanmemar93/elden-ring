const mongoose = require('mongoose');

const bodyPartSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const BodyPart = mongoose.model('BodyPart', bodyPartSchema);

module.exports = BodyPart;
