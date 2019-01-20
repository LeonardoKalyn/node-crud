const config = require('config');

const env = process.env.NODE_ENV || 'development';
const dialect = 'postgres';
const { url } = config.get('database');

if (!url) {
  throw new Error('Missing postgresql connection string');
}

module.exports = {
  [env]: {
    dialect,
    url,
    migrationStorageTableName: '_migrations',
  },
};
