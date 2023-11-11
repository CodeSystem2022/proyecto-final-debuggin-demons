const express =  require("express")
const compraRouter = express.Router()

const comprasController = require("../controllers/compras");

compraRouter.get ("/", comprasController.getAll);
compraRouter.get ("/:id", comprasController.getOne);
compraRouter.post("/", comprasController.save);

module.exports = compraRouter