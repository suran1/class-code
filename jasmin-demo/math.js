
'use strict';

var logger = require('./logger.js');

function add(a, b) {
  logger.logMessage('addition was used');
  logger.differentLog('another log');
  return a + b;
}

function subtract(a, b) {
  logger.logMessage('substraction was used');
  return a - b;
}

module.exports = {
  add: add,
  subtract: subtract
};
