const { check, validationResult } = require("express-validator");
const usersServices = require("../services/users");

const isOwnUser = async (req, res, next) => {
};

const isAdmin = async (req, res, next) => {
};

const isAuth = async (req, res, next) => {
};

const registerInputValidation = [
  check("firstName", "First Name Required").not().isEmpty(),
  check("lastName", "Last Name Required").not().isEmpty(),
  check("email", "Invalid Email").isEmail(),
  check("password", "Invalid Password").not().isEmpty().isStrongPassword(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }
    next();
  },
];

const loginInputValidation = [
  check("username").exists().not().isEmpty(),
  check("password").exists().not().isEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }
    next();
  },
];

module.exports = {
  isAdmin,
  isOwnUser,
  isAuth,
  registerInputValidation,
  loginInputValidation,
};
