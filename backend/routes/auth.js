const express = require("express");

const authRouter = express.Router();

const authController = require("../controllers/users");



authRouter.post("/login", authController.login);

module. Exports = authRouter;