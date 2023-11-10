const express = require("express");
const authRouter = express.Router();

const authController = require("../controllers/users");

authRouter.get("/me/:user", authController.profile);

module.exports = authRouter;