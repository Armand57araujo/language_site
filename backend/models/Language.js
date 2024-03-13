// Language.js

const mongoose = require('mongoose');

const languageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  // Add more fields as needed
});

module.exports = mongoose.model('Language', languageSchema);
