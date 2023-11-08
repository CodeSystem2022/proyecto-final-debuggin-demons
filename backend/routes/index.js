const express = require("express");
const router = express.Router();

const authRouter = require("./auth");
const carritoRouter = require("./carrito");
const compraRouter = require("./compras");
const metodosDePagoRouter = require("./metodosDePago");
const userRouter = require("./users");
