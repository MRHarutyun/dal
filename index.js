const config = require('./config');
const mongodb = require('./mongo-db');
const redis = require('./redis');

module.exports = {
  config,
  redis,
  mongodb,
};