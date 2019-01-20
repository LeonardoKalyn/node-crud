const Express = require('express');

const router = Express.Router();

const findUsersRoute = require('./find');
const updateUserRoute = require('./update');
const getUserRoute = require('./get');
const createUserRoute = require('./create');
const deleteUserRoute = require('./delete');

router.route('/')
  .get(findUsersRoute)
  .post(createUserRoute);

router.route('/:id')
  .get(getUserRoute)
  .patch(updateUserRoute)
  .delete(deleteUserRoute);


module.exports = router;
