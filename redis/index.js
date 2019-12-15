/* eslint-disable  no-console, camelcase, no-await-in-loop, no-param-reassign */
const redis = require('redis');

class RedisRepo {
  constructor() {
    this.client = redis.createClient();
    this.on = this.on.bind(this);
    this.get = this.get.bind(this);
    this.set = this.set.bind(this);
    this.config = this.config.bind(this);
    this.subscribe = this.subscribe.bind(this);
    this.setReminder = this.setReminder.bind(this);
  }

  on(event, callBack) {
    this.client.on(event, callBack);
  }

  set(key, value) {
    this.client.set(key, value);
  }

  get(key) {
    return new Promise((resolve, reject) => {
      this.client.get(key, (error, result) => {
        if (error) {
          console.log(error, 'error');
          return reject(error);
        }
        return resolve(result);
      });
    });
  }

  config(option, value, type) {
    this.client.config(option, value, type);
  }

  subscribe(channel) {
    this.client.subscribe(channel);
  }

  setReminder(expire) {
    this.client
      .multi()
      .set('reminder', new Date().toISOString())
      .expire('reminder', expire)
      .exec();
  }
}

module.exports = RedisRepo;
