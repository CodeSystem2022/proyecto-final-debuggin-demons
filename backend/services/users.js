const usersRepo = require("../repositories/usuariosRepository");


const bcrypt = require("bcrypt");
const getAll = async () => {
  const data = await usersRepo.getAll();
  return data;
};

const create = async (body) => {
  body.password = bcrypt.hashSync(body.password, 10);
  const checkEmail = await usersRepo.findByEmail(body.email);
  if (checkEmail) {
    throw new Error("Email already registered");
  }
  const data = await usersRepo.create(body);
  return data;
};

const getById = async (id) => {
  const data = await usersRepo.getById(id);
  return data;
};

const login = async (body) => {
  const data = await usersRepo.findByUsername(body.username);
  if (!data) {
    throw new Error("Username invalido");
  }
  if (!bcrypt.compareSync(body.password, data.password)) {
    throw new Error("Password invalido");
  } else {
    const userData = {
      id: data.id,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      image: data.image,
      roleId: data.roleId,
    };
    const token = jwt.createToken(userData);
    return token;
  }
};

const remove = async (req) => {
  if (
    req.params.id !== req.params.tokenizedUserId.toString() &&
    req.params.adminRole >= 2
  ) {
    throw new Error("Sin autorizacion");
  }
  const user = await usersRepo.getById(req.params.id);
  if (!user) {
    throw new Error("Usuario inexistente");
  }
  const deletedUser = await usersRepo.remove(req.params.id);
  return deletedUser;
};

const update = async (req) => {
  if (
    req.params.id !== req.params.tokenizedUserId.toString() &&
    req.params.adminRole >= 2
  ) {
    throw new Error("Sin autorizacion");
  }
  const changes = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  };
  const userUpdate = await usersRepo.update(req.params.id, changes);
  if (!userUpdate) {
    throw new Error("Error en los datos a actualizar");
  }
  return userUpdate;
};

module.exports = {
  getAll,
  getById,
  login,
  create,
  remove,
  update,
};
