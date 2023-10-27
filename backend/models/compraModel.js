const mongoose = require("mongoose");

const comprasSchema = new mongoose.Schema({
  username: String,
  email: String,
  dni: String,
  fechaCompra: Date,
  videoJuegos: [],
  precioTotal: Number,
  formaPago: String,
  idCompra: Number,
  descuento: Number,
});

const Compra = mongoose.model("Compras", comprasSchema);

module.exports = Compra;

