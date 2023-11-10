const express = require("express");
const metodosDePagoRouter = express.Router();

const metodosDePagoController = require("../controllers/metodosDePago");

metodosDePagoRouter.get("/", metodosDePagoController.getAll);

module.exports = metodosDePagoRouter;
