const express = require('express');
const router = express.Router();

// Estructura de datos para representar el carrito (en memoria)
const carrito = [];

// Ruta para agregar un producto al carrito
router.post('/agregar', (req, res) => {
  const { producto } = req.body;
  carrito.push(producto);
  res.json({ message: 'Producto agregado al carrito', carrito });
});

// Ruta para ver el contenido del carrito
router.get('/ver', (req, res) => {
  res.json(carrito);
});

// Ruta para eliminar un producto del carrito
router.delete('/eliminar/:producto', (req, res) => {
  const { producto } = req.params;
  const index = carrito.findIndex(item => item === producto);
  if (index !== -1) {
    carrito.splice(index, 1);
    res.json({ message: 'Producto eliminado del carrito', carrito });
  } else {
    res.status(404).json({ message: 'Producto no encontrado en el carrito' });
  }
});

// Agregar más rutas (calcular el total, procesar el pago, enviar email confirmando el pago, etc).

module.exports = router;