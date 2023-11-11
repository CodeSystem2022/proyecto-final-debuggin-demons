const usersRepo = require("../repositories/user");
const userModel = require("../models/user")
const bcrypt = require("bcrypt");


const getAll = async () => {
  const data = await usersRepo.getAll();
  return data;
};

const save = async (body) => {
  body.password = bcrypt.hashSync(body.password, 10);
  const username = await usersRepo.findByUsername(body.username);
  if (username) {
    throw new Error("Usuario ya existe. Intente con otro username");
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
    throw new Error("Ocurrio un error al intentar Logearse");
  }
  if (!bcrypt.compareSync(body.password, data.password)) {
    throw new Error("Password invalido");
  } else {
    const user = new userModel(data);
    return user;
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


const getAllUsers = async (req) => {
  const listUsuarios = userRepository.getAllUsers();
  return listUsuarios;
};

const getOne = async (username) => {
  const user = await usersRepo.getOne(username);
  return user;
};

const register = async (body) => {
  body.password = bcrypt.hashSync(body.password, 10);
  const checkEmail = await usersRepo.findByEmail(body.email);
  if (checkEmail) {
    throw new Error("Email already registered");
  }
  const data = await usersRepo.create(body);
  await welcomeEmail.send(
    data.dataValues.email,
    data.dataValues.lastName,
    data.dataValues.firstName
  );
  return data;
};

const profile = async (id) => {
  const data = await usersRepo.getOne(id);
  return data;
};

module.exports = {
  getAll,
  getById,
  getOne,
  login,
  save,
  remove,
  update,
};
