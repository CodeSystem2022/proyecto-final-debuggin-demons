const mongoose = require("mongoose");

const metodosDePagoSchema = new mongoose.Schema({
  metodo: String,
});

const MetodosDePago = mongoose.model("metodos-de-pago", metodosDePagoSchema);

module.exports = MetodosDePago;
