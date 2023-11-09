const express = require("express");
const authRouter = express.Router();

const authController = require("../controllers/users");


authRouter.post("/register", authController.register);


module.exports = authRouter;