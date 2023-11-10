const key_carrito = "1813372f26e043d59e35a067ba3a439a";
let videojuegosCards;

const getVideojuegosParaCards = async () => {
  let page = Math.floor(Math.random() * 20) + 1;
  const { data, status } = await axios.get(
    `https://api.rawg.io/api/games?key=${key_carrito}&page=${page}`,
    {
      cors: "no-cors",
    }
  );

  if (status === 200) {
    data.results.forEach((videojuego) => {
      videojuegosCards.push(videojuego);
    });
    videojuegosCards.map((videojuego) => {
      videojuego.precio = (Math.random() * (24000 - 15000) + 15000).toFixed(2);
    });

    localStorage.setItem("videojuegos", JSON.stringify(videojuegosCards))
  } else {
    console.error("Ocurrio un error al obtener videojuegos.");
  }
};

const construirCarousel = async () => {

const videojuegosCards = JSON.parse(localStorage.getItem("videojuegos"));

const contenedorCarousel = document.querySelector("#contenedor-carousel");


  let index = 0;

  videojuegosCards.forEach((videojuego) => {
    const contenedor = document.createElement("div");
    contenedor.classList.add("col-lg-4");

    if (index > 0) {
      contenedor.classList.add("d-none");
      contenedor.classList.add("d-lg-block");
    }

    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("mt-2");

    const image = document.createElement("img");
    image.classList.add("card-img-top");
    image.src = videojuego.background_image;
    image.alt = videojuego?.slug;
    image.style = "min-height : 233px; max-height : 233px ";
    card.appendChild(image);

    // Create the card body
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.style = "min-height : 134px; max-height : 134px ";

    // Add the card title to the card body
    const cardTitleLink = document.createElement("a");
    cardTitleLink.href = "#";
    cardTitleLink.classList.add("text-white");


    const cardTitle = document.createElement("h5");
    cardTitle.setAttribute("data-id", videojuego.id);
    cardTitle.classList.add("card-title");
    cardTitle.textContent = videojuego.name;
    cardTitle.addEventListener("click", videojuegoAMostrar);
    
    cardTitleLink.appendChild(cardTitle);
    cardBody.appendChild(cardTitleLink);

    // Add the card text to the card body
    const cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.textContent = videojuego.description;
    cardBody.appendChild(cardText);

    // Add the button to the card body
    const contenedorBoton = document.createElement("div");
    contenedorBoton.classList.add("d-flex");
    contenedorBoton.classList.add("justify-content-between");

    const precio = document.createElement("div");
    precio.classList.add("txt-precio");
    precio.textContent = `$${videojuego.precio}`;

    const button = document.createElement("a");
    button.setAttribute("data-id", videojuego.id);
    button.classList.add("btn");
    button.classList.add("btn-add-to-cart");
    button.classList.add("btn-generico");
    button.textContent = "Add to cart";
    button.href = "#!";

    button.addEventListener("click", bindAgregarItemCarrito);

    contenedorBoton.appendChild(precio);
    contenedorBoton.appendChild(button);
    cardBody.appendChild(contenedorBoton);

    card.appendChild(cardBody);

    contenedor.appendChild(card);

    contenedorCarousel.appendChild(contenedor);
  });
};

const bindAgregarItemCarrito = (e) => {
  const boton = e.target;
  const id = boton.getAttribute("data-id");
  agregarItemAlCarrito(id);
};

const obtenerJuego = async (id) => {
  const  { data, status} = await axios.get(`https://api.rawg.io/api/games/${id}?key=${key_carrito}`)
  if (status === 200) {
    return data.results
  }
;
};

const videojuegoAMostrar =async  (e) => {
  e.preventDefault();
  const elemento = e.target;
  const idABuscar = elemento.getAttribute("data-id");
  const juego = await obtenerJuego(idABuscar);
  const juegoStr = JSON.stringify(juego);
  localStorage?.removeItem("videojuegoAmostrar");
  localStorage.setItem("videojuegoAmostrar", juegoStr);
  window.location.href ="/src/components/videojuego.html";
};


const agregarItemAlCarrito = async (videojuego) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const body = {
    username: user.username,
    videojuego,
  };

  const { data, status } = await axios.post(
    "http://localhost:3000/carrito",
    body,
    {
      cors: "no-cors",
      withCredentials: false,
    }
  );

  if (status === 200) {
    localStorage.setItem("carrito", JSON.stringify(data));
    actualizarItemsCarrito(videojuego);
  } else {
    console.log("Ocurrio un error al tratar de actualizar el carrito");
  }
};

const actualizarItemsCarrito = async ( videojuego) => {

  let carritoActual = JSON.parse(localStorage.getItem("carrito"))
  carritoActual.push(videojuego)
  localStorage?.removeItem("carrito");
  localStorage?.setItem("carrito", carritoActual);
};

getVideojuegosParaCards();
construirCarousel();
