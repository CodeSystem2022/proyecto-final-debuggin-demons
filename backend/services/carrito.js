const carritoRepo = require("../repositories/carrito");

const getCarrito = async (req) => {
    const carrito = await carritoRepo.getCarrito(req.query.username);
    return carrito
};

const save = async (req) => {
    const user = carritoRepo.save(req);
    return user;

};

const update = async (req, res, next) => {
  try {
    const compra = carritoRepository.update(req);
    res.status(202).json(compra);
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const user = carritoRepo.remove(req);
    const id = req.params.id;
    await slidesServices.remove(id);
    res.status(200).json({ msg: "slide remove successfully" });
  } catch (e) {
    next(e);
  }
};
const removeOne = async (req) => {
    return await carritoRepo.removeOne(req);
};

const clear = async (req) => {
    const username = req.params.username;
    return await carritoRepo.clear(username);
};



module.exports = {
  save,
  update,
  remove,
  removeOne,
  clear,
  getCarrito,
};
