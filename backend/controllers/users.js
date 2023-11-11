const usuariosService = require("../services/users");


const register = async (req, res, next) => {
    try{
        const user = usuariosService.save(req.body);
        res.status(201).json(user)
    }catch (error){
        next(error);
    }
}
const login = async (req, res, next) => {
  try {
    const user = await usuariosService.login(req.body);
    res.status(200).json({"msg": "Usario logeado", user: user})
  } catch (e) {
    next(e);
  }
};

const profile = async (req, res, next) => {
  try {
    const user = await usuariosService.getOne(req.params.user);
    res.status(200).json({user});
  } catch (e) {
    next(e);
  }
};

const getAll = async (req, res, next) => {
  try {
    const data = await usersService.getAll();
    res.status(200).json(data);
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
const getByUsername = async (req, res, next) => {
  try {
    const user = await usersService.getById();
    res.status(200).json({
      user,
    });
  } catch (e) {
    next(e);
  }
};


module.exports = {
    getByUsername,
    update,
    remove,
    create,
    register,
    login,
    profile
}