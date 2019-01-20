const Express = require('express');

const router = Express.Router();

const usersRoutes = require('./users');

router.use('/users', usersRoutes);


module.exports = router;
