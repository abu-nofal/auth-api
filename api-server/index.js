'use strict';
// require('dotenv').config();
const { db } = require('./src/models');
const server = require('./src/server.js');
// const port=process.env.PORT
db.sync().then(() => {
  server.start(3000);
});
