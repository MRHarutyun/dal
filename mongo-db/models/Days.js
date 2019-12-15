const { Schema, model } = require('mongoose');

const schema = new Schema({
  created_at: {
    type: String,
    required: true,
  },
  trump: {
    type: Number,
    default: 0,
  },
  isis: {
    type: Number,
    default: 0,
  },
  esports: {
    type: Number,
    default: 0,
  },
  ladygaga: {
    type: Number,
    default: 0,
  },
});

module.exports = model('Days', schema);
