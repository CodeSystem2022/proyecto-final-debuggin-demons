const key_api_carrito = "1813372f26e043d59e35a067ba3a439a";
const videojuegosEnCarrito = JSON.parse(localStorage.getItem("carritoCompleto"));
const user = JSON.parse(localStorage.getItem("user"));

const contenedorCarrito = document.querySelector(".carrito-smart");

const mostrarCarrito = () => {
  
  videojuegosEnCarrito.forEach((videojuego) => {

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

    const imageColumn = document.createElement("div");
    imageColumn.classList.add("col-md-12");
    imageColumn.classList.add("col-lg-3");
    imageColumn.classList.add("col-xl-3");
    imageColumn.classList.add("mb-4");
    imageColumn.classList.add("mb-lg-0");

    const productInformationColumn = document.createElement("div");
    productInformationColumn.classList.add("col-md-6");
    productInformationColumn.classList.add("col-lg-6");
    productInformationColumn.classList.add("col-xl-6");

    const priceAndButtonsColumn = document.createElement("div");
    priceAndButtonsColumn.classList.add("col-md-6");
    priceAndButtonsColumn.classList.add("col-lg-3");
    priceAndButtonsColumn.classList.add("col-xl-3");
    priceAndButtonsColumn.classList.add("border-sm-start-none");
    priceAndButtonsColumn.classList.add("border-start");

    const image = document.createElement("img");
    image.classList.add("w-100");
    image.src = videojuego.background_image;
    imageColumn.appendChild(image);

    const productTitle = document.createElement("h5");
    productTitle.textContent = videojuego.name;
    productInformationColumn.appendChild(productTitle);

    const rating = document.createElement("div");
    rating.classList.add("d-flex");
    rating.classList.add("flex-row");

    for (let i = 0; i < 4; i++) {
      const star = document.createElement("i");
      star.classList.add("fa");
      star.classList.add("fa-star");
      star.classList.add("text-danger");
      rating.appendChild(star);
    }

    const reviewCount = document.createElement("span");
    reviewCount.textContent = videojuego.rating;
    rating.appendChild(reviewCount);

    productInformationColumn.appendChild(rating);

    const productDescription = document.createElement("div");
    productDescription.classList.add("mt-1");
    productDescription.classList.add("mb-0");
    productDescription.classList.add("text-muted");
    productDescription.classList.add("small");

    let generos = [];
    videojuego.genres.forEach((genero) => generos.push(genero.name));
    let tags = [];
    videojuego.tags.forEach((tag) => tags.push(tag.name));

    const productFeatures = [
      videojuego.released,
      generos.join(" "),
      tags.join(" "),
    ];
    for (let i = 0; i < productFeatures.length; i++) {
      const productFeature = document.createElement("span");
      productFeature.textContent = productFeatures[i];

      if (i < productFeatures.length - 1) {
        const separator = document.createElement("span");
        separator.textContent = " • ";
        productDescription.appendChild(separator);
      }

      productDescription.appendChild(productFeature);
    }

    const contenderoDescripcion =  document.createElement("div")
    const descripcion = document.createElement("p")
    descripcion.innerHTML = videojuego.description.slice(0, 190) + " ...";

    contenderoDescripcion.appendChild(descripcion);

    productDescription.appendChild(contenderoDescripcion);

    productInformationColumn.appendChild(productDescription);

    const price = document.createElement("h4");
    price.classList.add("mb-1");
    price.classList.add("me-1");
    price.textContent = "$" + videojuego.precio;
    priceAndButtonsColumn.appendChild(price);

    const oldPrice = document.createElement("span");
    oldPrice.classList.add("text-danger");
    oldPrice.innerHTML = `<s>$${(videojuego.precio * 1.17).toFixed(2)}</s>`;
    priceAndButtonsColumn.appendChild(oldPrice);

    const freeShipping = document.createElement("h6");
    freeShipping.classList.add("text-success");
    freeShipping.textContent = "Mejor Precio";
    priceAndButtonsColumn.appendChild(freeShipping);

    const detailsButton = document.createElement("button");
    detailsButton.classList.add("btn");
    detailsButton.classList.add("btn-generico");
    detailsButton.classList.add("btn-sm");
    detailsButton.setAttribute("data-id", videojuego.id);
    detailsButton.addEventListener("click", videojuegoAMostrar);
    detailsButton.textContent = "Ver más";
    priceAndButtonsColumn.appendChild(detailsButton);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn");
    deleteButton.classList.add("btn-outline-danger");
    deleteButton.classList.add("btn-sm");
    deleteButton.textContent = "Quitar";
    priceAndButtonsColumn.appendChild(deleteButton);

    row.appendChild(imageColumn);
    row.appendChild(productInformationColumn);
    row.appendChild(priceAndButtonsColumn);

    cardBody.appendChild(row);

    card.appendChild(cardBody);

    
    contenedorCarrito.appendChild(card);
  });

    let precioTotal = 0;
    videojuegosEnCarrito.forEach((juego) => {
      precioTotal += +juego.precio;
    });

    const contenedorTotalizador = document.createElement("div");
    contenedorTotalizador.className =
      "d-flex py-4 bg-light mt-2 justify-content-around";

    const btn_pagar = document.createElement("a");
    btn_pagar.setAttribute("total", precioTotal.toFixed(2));
    btn_pagar.classList = "btn btn-generico";
    btn_pagar.innerHTML = "Finalizar compra"
    btn_pagar.style.textDecoration = "none";
    btn_pagar.href = "/frontend/src/components/pago-carrito.html";


    const etiquetaTotal = document.createElement("h3");
    etiquetaTotal.classList = "text-dark";
    etiquetaTotal.classList = "px-5";
    etiquetaTotal.innerHTML = "Total a pagar: $" + precioTotal.toFixed(2);

    contenedorTotalizador.appendChild(btn_pagar);
    contenedorTotalizador.appendChild(etiquetaTotal);

    contenedorCarrito.appendChild(contenedorTotalizador);

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
  const { data, status } = await axios.get(`https://api.rawg.io/api/games/${id}?key=${key_api_carrito}`);
  if (status === 200) {
    return data;
  }
};


const videojuegoAMostrar = async (e) => {
  e.preventDefault();
  const elemento = e.target;
  const idABuscar = elemento.getAttribute("data-id");
  console.log(idABuscar);
  const juego = await obtenerJuego(idABuscar);
  const juegoStr = JSON.stringify(juego);
  localStorage?.removeItem("videojuegoAmostrar");
  localStorage.setItem("videojuegoAmostrar", juegoStr);
  window.location.href = "/frontend/src/components/videojuego.html";
};


actualizarGlobo();
mostrarCarrito();