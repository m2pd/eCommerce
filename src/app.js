require('dotenv').config();
const compression = require('compression');
const express = require('express');
const { default: helmet } = require('helmet');
const morgan = require('morgan');
const { checkOverLoad } = require('./helpers/check.connect');

const app = express();

//init midderware
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());

//init db
require('./dbs/init.mongodb');
// checkOverLoad();
//init router
app.get('/', (req, res, next) => {
  const srtCompress = 'Hello M2pd';
  return res.status(200).json({
    message: 'Welcome M2pd',
    metadata: srtCompress.repeat(10000),
  });
});
//handler error

module.exports = app;
