const usersRepo = require("../repositories/user");
const userModel = require("../models/user")
const bcrypt = require("bcrypt");

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


  module.exports = {
    save,
    
  };