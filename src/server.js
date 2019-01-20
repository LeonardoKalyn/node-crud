const config = require('config');

const Express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');

const logger = require('./lib/logger');

const configureRoutes = require('./routes');

module.exports = function initExpress () {
  const app = new Express();

  app.use(bodyParser.json());
  app.use(morgan(config.get('log'), { stream: logger.stream }));

  app.use(helmet());
  app.use(helmet.xssFilter());
  app.disable('x-power-by');
  app.use(helmet.hidePoweredBy({ setTo: 'PHP 5.5.14' }));

  app.use('/api', configureRoutes);

  return app;
};
