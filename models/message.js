// message.js model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  template: {
    type: String,
    required: true,
  },
  words: {
    type: String,
  },
  conjunctions: {
    type: String,
  },
  additionalTemplate: {
    type: String,
  },
  additionalWords: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Message', messageSchema);
