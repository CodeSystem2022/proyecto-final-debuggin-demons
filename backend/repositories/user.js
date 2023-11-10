const User = require("../models/user");

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

const getOne = async (username) => {
  const user = await User.findOne({ username });
  return user;
};

const findByUsername = async (username) => {
  const data = await User.findOne({ username });
  return data;
};

const findByEmail = async (email) => {
  const data = await User.findOne({
    where: { email: email }
  });
  return data;
};

const remove = async (id) => {
  await User.destroy({ where: { username : username } });
  return true;
};

const clear = async (username) => {
  console.log("Pasando Repository");
  await User.update(
    {carrito : []},
    {
    where: {
        username : username,
      },
    }
  );
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
  getOne,
  findByUsername,
  findByEmail,
  create,
  remove,
  update,
  clear,
};
