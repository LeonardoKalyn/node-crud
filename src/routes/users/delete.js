const UserModel = require('../../models/user');

const findUsersRoute = (req, res) => {
  const { id } = req.params;

  UserModel.findById(id)
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          error: 'user_not_found'
        })
      }

      return user.destroy()
        .then(() => {

          res.send({
            data: user,
          });
        })
    });
};

module.exports = findUsersRoute;
