const metodosDePagoRepo = require("../repositories/metodosDePago");

const getAll = async (req) => {
  const metodos = metodosDePagoRepo.getAll();
  return metodos;
};

module.exports = {
  getAll,
};
