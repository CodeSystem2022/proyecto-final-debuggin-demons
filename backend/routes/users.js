const express =  require("express")
const userRouter = express.Router()

const usuariosController = require("../controllers/users");


userRouter.post("/", usuariosController.create);
userRouter.get("/:id", usuariosController.getByUsername);
userRouter.put("/:id", usuariosController.update);

module.exports = userRouter;