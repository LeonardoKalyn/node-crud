const UserModel = require('../../models/user');

const findUsersRoute = (req, res) => {
  const { id } = req.params;
  const data = req.body;

  UserModel.findById(id)
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          error: 'user_not_found'
        })
      }

      return user.update(data)
        .then((newUser) => {

          res.send({
            data: newUser,
          });
        })
    });
};

module.exports = findUsersRoute;
