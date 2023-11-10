const metodosDePagoService = require("../services/metodosDePago");

const getAll = async (req, res, next) => {
  try {
    const metodos = await metodosDePagoService.getAll();
    res.json(metodos);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll
};
