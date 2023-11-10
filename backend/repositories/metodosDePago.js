const MetodosDePago = require("../models/metodos-de-pago");

const getAll = async () => {
  const todos = await MetodosDePago.find();
  return todos;
};

module.exports = {
  getAll
};