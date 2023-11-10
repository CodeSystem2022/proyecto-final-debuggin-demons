const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  email: String,
  username: String,
  password: String,
  carrito: [String],
  fechaNacimiento: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;


