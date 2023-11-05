const usuariosService = require("../services/users");

const login = async (req, res, next) => {
  console.log(req.body);
  try {
    const user = await usuariosService.login(req.body);
    res.status(200).json({"msg": "Usario logeado", user: user})
  } catch (e) {
    next(e);
  }
};

module.exports = {
  login
}