const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    // Add any necessary options or default values
  },
  template: {
    type: String,
    required: true,
  },
  word: {
    type: String,
    required: true,
  },
  phrases: {
    beforeTemplate: {
      type: String,
      required: true,
    },
    afterTemplate: {
      type: String,
      required: true,
    }
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
