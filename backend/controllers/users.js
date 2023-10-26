const usersService = require("../services/users");
const modules = require("../modules/auth");

const getAll = async (req, res, next) => {
  try {
    const data = await usersService.getAll();
    res.status(200).json(data);
  } catch (e) {
    next(e);
  }
};

const login = async (req, res, next) => {
  try {
    const jwt = await usersService.login(req.body);
    if (!jwt) {
      res.status(401).json({ ok: "false" });
    } else {
      res.status(200).json({ token: jwt });
    }
  } catch (e) {
    next(e);
  }
};
const create = async (req, res, next) => {
  try {
    const user = await usersService.create(req.body);
    const token = modules.createToken(req.body);
    res.status(200).json({
      token,
      user,
    });
  } catch (e) {
    next(e);
  }
};

const remove = async (req, res, next) => {
  try {
    await usersService.remove(req);
    res.status(204).json({ message: "Borrado con exito!" });
  } catch (e) {
    next(e);
  }
};

const update = async (req, res, next) => {
  try {
    const user = await usersService.update(req);
    res.status(200).json({
      user,
    });
  } catch (e) {
    next(e);
  }
};
const getById = async (req, res, next) => {
  try {
    const user = await usersService.getById(req.params.tokenizedUserId);
    res.status(200).json({
      user,
    });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getAll,
  login,
  remove,
  update,
  create,
  getById,
};
