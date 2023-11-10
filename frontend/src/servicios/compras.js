const key_api_carrito = "1813372f26e043d59e35a067ba3a439a";
const user = JSON.parse(localStorage.getItem("user"));

const contenedor = document.querySelector(".compras");


const obtenerInfoUnJuego = async (id) => {
  const { data, status } = await axios.get(
    `https://api.rawg.io/api/games/${id}?key=${key_api_carrito}`
  );

  if (status === 200) {
    return data;
  } else {
    console.error(
      "Ocurrio un error al tratar de recuperar el vidojuego id: " + id
    );
  }
};

const mostrarCarrito = () => {

const comprasLocal = JSON.parse(localStorage.getItem("compras"));
console.log(comprasLocal);
comprasLocal.forEach(compra => {console.log(compra);})
  

  comprasLocal.forEach(compra => {

    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("shadow-0");
    card.classList.add("border");
    card.classList.add("rounded-3");
    card.classList.add("my-4");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const row = document.createElement("div");
    row.classList.add("row");

    const productInformationColumn = document.createElement("div");

    const idCompra = document.createElement("h2");
    idCompra.textContent = "ID de la Compra: " + compra.idCompra;
    productInformationColumn.appendChild(idCompra);

    const fechaCompra = document.createElement("h6");
    fechaCompra.textContent = "Fecha de la compra: " + new Date(compra.fechaCompra).toDateString();
    productInformationColumn.appendChild(fechaCompra);

    const usuario = document.createElement("p");
    usuario.textContent = "Usuario: " + compra.username;
    productInformationColumn.appendChild(usuario);

    const dni = document.createElement("p");
    dni.textContent = "DNI: " + compra.dni;
    productInformationColumn.appendChild(dni);

    compra.videoJuegos.forEach(async (videjuego) => {
      const videojuegocompeto = await obtenerInfoUnJuego(videjuego)
      console.log(videojuegocompeto);
      const videojuegoHTML = document.createElement("p");
      videojuegoHTML.textContent = "Videojuego: " + videojuegocompeto.name;
      productInformationColumn.appendChild(videojuegoHTML);
    });

    const precio = document.createElement("p");
    precio.textContent = "Precio: AR$" + compra.precioTotal;
    productInformationColumn.appendChild(precio);

    const formaDePago = document.createElement("p");
    formaDePago.textContent = "Forma De Pago: " + compra.formaPago;
    productInformationColumn.appendChild(formaDePago);

    const descuento = document.createElement("p");
    descuento.textContent = "Descuento: %" + compra.descuento;
    productInformationColumn.appendChild(descuento);

    row.appendChild(productInformationColumn);

    cardBody.appendChild(row);

    card.appendChild(cardBody);

    contenedor.appendChild(card);
  });

};

const actualizarGlobo = () => {
  if (user !== null) {
    const globo = document.querySelector(".span-num-videjuegos-carrito");
    const carrito = user.carrito;
    globo.innerHTML = carrito.length;
  } else {
    console.error("Ocurrio un error al actualizar el globo");
  }
};

const obtenerJuego = async (id) => {
  const { data, status } = await axios.get(
    `https://api.rawg.io/api/games/${id}?key=${key_api_carrito}`
  );
  if (status === 200) {
    return data;
  }
};

const videojuegoAMostrar = async (e) => {
  e.preventDefault();
  const elemento = e.target;
  const idABuscar = elemento.getAttribute("data-id");
  const juego = await obtenerJuego(idABuscar);
  const juegoStr = JSON.stringify(juego);
  localStorage?.removeItem("videojuegoAmostrar");
  localStorage.setItem("videojuegoAmostrar", juegoStr);
  window.location.href = "/frontend/src/components/videojuego.html";
};


const obtenerComprasUsuario = async (username) => {
  const { data, status } = await axios.get(
    `http://localhost:3000/compras?id=${username}`
  );
  if (status === 200) {
      localStorage.setItem("compras", JSON.stringify(data));
  } else {
    console.error("No se pudo obtener las compras");
  }
};

const init = () => {
  obtenerComprasUsuario(user.username);
}

init()
actualizarGlobo();
mostrarCarrito();
