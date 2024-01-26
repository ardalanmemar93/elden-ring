const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const templateSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true,
    },
  });

    module.exports = mongoose.model('Template', templateSchema);