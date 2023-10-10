'use strict';

const mongoose = require('mongoose');
const os = require('os');
const process = require('process');
const _SECOND = 5000;

const countConnect = () => {
  const numberConnections = mongoose.connections.length;
  console.log('Number of connect::', numberConnections);
};

//check overload
const checkOverLoad = () => {
  setInterval(() => {
    const numberConnection = mongoose.connections.length;
    const numberCores = os.cpus.length;
    const memoryUsage = process.memoryUsage().rss;

    console.log(`Active connection: ${numberConnection}`);
    console.log(`Memory Usage: ${memoryUsage / 1024 / 1024} MB`);

    const maxConnections = numberCores * 5;
    if (maxConnections > numberConnection) {
      console.log('Connection overload detected');
      //notify.send(...)
    }
  }, _SECOND); //monitor every 5 second
};

module.exports = {
  countConnect,
  checkOverLoad,
};
