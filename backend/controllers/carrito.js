const carritoService = require("../services/carrito");

const getAll = async (req, res, next) => {
  try {
    const carrito = await carritoService.getCarrito(req);
    res.status(200).json(carrito);
  } catch (error) {
    next(error);
  }
};

const save = async (req, res, next) => {
  try {
    const carrito = carritoService.save(req);
    res.status(201).json(carrito);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const compra = carritoService.update(req);
    res.status(202).json(compra);
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    await carritoService.removeOne(req);
    res.status(200).json({ msg: 'Item removido'});
  } catch (e) {
    next(e);
  }
};

const clear = async (req, res, next) => {
  try {
    await carritoService.clear(req);
    res.status(200).json({ msg: "Lista vacia "});
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getAll,
  save,
  update,
  remove,
  clear,
};
