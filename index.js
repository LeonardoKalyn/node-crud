const config = require('config');

const server = require('./src/server');
const logger = require('./src/lib/logger')
const database = require('./src/lib/database')

const run = async () => {
  const app = server();

  // this.database = DatabaseConfig(this);


    // Object.keys(this.models).forEach(model => {
    //   if (this.models[model].associate) {
    //     this.models[model].associate(this.models);
    //   }
    // });

  await database.authenticate();

  logger.info('Connected to database');

  app.listen(config.get('port'), () => {
    logger.info(`Node Crud on http://localhost:${config.get('port')}`);
  });
  
}

run();
