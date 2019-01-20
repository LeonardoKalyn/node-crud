const UserModel = require('../../models/user');

const findUsersRoute = (req, res) => {
  UserModel.findAndCountAll({})
    .then(({ count, rows }) => {
      res.send({
        data: rows,
        total: count,
      });
    });
};

module.exports = findUsersRoute;
