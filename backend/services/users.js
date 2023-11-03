const usersRepo = require("../repositories/user");
const userModel = require("../models/user")
const bcrypt = require("bcrypt");


const login = async (body) => {
  const data = await usersRepo.findByUsername(body.username);
  if (!data) {
    throw new Error("Ocurrio un error al intntar Logearse");
  }