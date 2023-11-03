const usersRepo = require("../repositories/user");
const userModel = require("../models/user")
const bcrypt = require("bcrypt");


const login = async (body) => {
  const data = await usersRepo.findByUsername(body.username);
  if (!data) {
    throw new Error("Ocurrio un error al intntar Logearse");
  }
  if (!bcrypt.compareSync(body.password, data.password)) {
    throw new Error("Password invalido");
  } else {
    const user = new userModel(data);
    return user;
  }
};


module.exports = {
  login
};