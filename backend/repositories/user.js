const Models = require("../models/index");

const getAll = async () => {
  const data = await Models.Users.findAll({
    attributes: ["firstName", "email", "image"],
  });
  return data;
};

const create = async (body) => {
  const data = await Models.Users.create(body);

  return data;
};
const getById = async (id) => {
  const user = await Models.Users.findByPk(id, {
    attributes: {
      exclude: ["password"],
    },
  });
  return user;
};

const findByUsername = async (username) => {
  const data = await User.findOne({
    where: { username: username },
    raw: true,
  });
  return data;
};

const remove = async (id) => {
  await User.destroy({ where: { username : username } });
  return true;
};

const update = async (id, changes) => {
  const userUpdate = await User.update(
    { firstName: changes.firstName, lastName: changes.lastName },
    {
      where: {
        id: id,
      },
    }
  );
  return userUpdate;
};

module.exports = {
  getAll,
  getById,
  findByUsername,
  create,
  remove,
  update,
};
