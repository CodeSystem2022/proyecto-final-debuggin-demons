const express = require("express");
const router = express.Router();

const authRouter = require("./auth");
const carritoRouter = require("./carrito");
const compraRouter = require("./compras");
const metodosDePagoRouter = require("./metodosDePago");
const userRouter = require("./users");


router.use('/auth', authRouter);
router.use('/carrito', carritoRouter);
router.use("/compras", compraRouter);
router.use('/metodos-de-pago', metodosDePagoRouter);
router.use('/user', userRouter);


module.exports = router;