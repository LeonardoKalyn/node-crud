const Sequelize = require('sequelize');
const database = require('../lib/database');

const User = database.define('users', {
  id: { type: Sequelize.DataTypes.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4},
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  created_at: { type: Sequelize.DATE },
  updated_at: { type: Sequelize.DATE },
}, {underscored: true});

module.exports = User;
