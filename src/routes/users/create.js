const UserModel = require('../../models/user');

const findUsersRoute = (req, res) => {
  const data = req.body;

  UserModel.create(data)
    .then((user) => {
      res.send({
        data: user,
      });
    });
};

module.exports = findUsersRoute;
