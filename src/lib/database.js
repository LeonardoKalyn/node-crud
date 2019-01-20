const Sequelize = require('sequelize');
const config = require('config');

const logger = require('./logger');

const sequelize = new Sequelize(config.get('database.url'), { logging: logger.stream.write });

module.exports = sequelize;
