const agregarAlCarrito = async (producto) => {

  producto

  await fetch("localhost:3000/carrito", {
    method: "POST",
    body: producto,
  }).then();
};
