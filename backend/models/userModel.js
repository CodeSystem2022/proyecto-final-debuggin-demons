const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  email: String,
  dni: String,
  fechaNac: Date,
  nacionalidad: String,
  username: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;


