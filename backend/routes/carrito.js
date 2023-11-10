const express = require("express");
const carritoRouter = express.Router();

const carritoController = require("../controllers/carrito");

carritoRouter.get("/", carritoController.getAll);
carritoRouter.post("/", carritoController.save);
carritoRouter.put("/:username", carritoController.update);
carritoRouter.delete("/:username/:videojuego", carritoController.remove);
carritoRouter.delete("/:username", carritoController.clear);

module.exports = carritoRouter;
