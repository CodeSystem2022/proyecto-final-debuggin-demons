const User = require("../models/userModel");

const getAll = async () => {
  const data = await Models.Users.findAll({
    attributes: ["firstName", "email", "image"],
  });
  return data;
};

const create = async (body) => {
  const data = await User.create(body);

  return data;
};
const getById = async (id) => {
  const user = await User.findByPk(id, {
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

const update = async (username, changes) => {
  const userUpdate = await User.update(
    { nombre: changes.nombre, apellido: changes.apellido },
    {
      where: {
        username: username,
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
