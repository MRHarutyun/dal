const { Schema, model } = require('mongoose');

const schema = new Schema({
  id: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  created_at: {
    type: String,
    required: true,
  },
});

module.exports = model('Tweets', schema);
