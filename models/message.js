const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const messageSchema = new Schema ({
    "_id": "ObjectId",  // MongoDB generated unique identifier
    "userId": "ObjectId",  // User ID if you have user authentication
    "template": "String",  // Chosen template (e.g., "No **** ahead")
    "word": "String",  // Chosen word (e.g., "Enemy")
    "phrases": {
      "beforeTemplate": "String",  // Chosen phrase before template (e.g., "Be wary of")
      "afterTemplate": "String"  // Chosen phrase after template (e.g., "Victory ahead")
    },
    "createdAt": "Date",  // Timestamp for when the message was created
    "updatedAt": "Date"   // Timestamp for when the message was last updated
  })
  
  module.exports = mongoose.model('Message', messageSchema);