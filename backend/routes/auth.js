const express = require("express");

const router = express.Router();

const authController = require("../controllers/users");

const authMiddleware = require("../middlewares/auth");

// router.post("/login", authMiddleware.loginInputValidation, authController.login);
router.post("/login", authController.login);
router.post("/register", authMiddleware.registerInputValidation, authController.create);
router.get("/me", authMiddleware.isAuth, authController.getById);

module.exports = router;
