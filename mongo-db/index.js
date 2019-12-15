const mongoose = require('mongoose');
const { endpoint } = require('../config').db_config;
const { Tweets, Days } = require('./models');

class Db {
  constructor() {
    mongoose.connect(endpoint, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      promiseLibrary: global.Promise,
    });
    this.Tweets = Tweets;
    this.Days = Days;
  }
}

module.exports = new Db();
