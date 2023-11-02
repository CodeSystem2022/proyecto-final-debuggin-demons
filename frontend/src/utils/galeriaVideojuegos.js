const construirGaleria = async () => {
    //Obtengo la lista de videojuegos

    const videojuegos = await getVideojuegos();

    const videojuegosAleatorios = [];

    for (let i = 0; i < 5; i++) {
      // Seleccionar un videojuego aleatorio de la lista
      const videojuegoAleatorio =
        videojuegos[Math.floor(Math.random() * videojuegos.length)];

      // Añadir el videojuego aleatorio a la lista de videojuegos aleatorios
      videojuegosAleatorios.push(videojuegoAleatorio);
    }

  // Crear el elemento del carrusel
  const carouselElement = document.createElement("div");
  carouselElement.id = "carouselExampleIndicators";
  carouselElement.classList.add(
    "carousel",
    "slide",
  );
  carouselElement.setAttribute("data-bs-ride", "carousel");

  // Crear los elementos de los indicadores
  const indicatorsElement = document.createElement("div");
  indicatorsElement.classList.add("carousel-indicators");

  // Crear los indicadores individuales
  for (let i = 0; i < 5; i++) {
    const indicatorElement = document.createElement("button");
    indicatorElement.type = "button";
    indicatorElement.setAttribute(
      "data-bs-target",
      "#carouselExampleIndicators"
    );
    indicatorElement.setAttribute(
      "data-bs-slide-to",
      `${i}`
    );
    if (i === 0) {
        indicatorElement.classList.add("active");
        indicatorElement.setAttribute(
          "aria-current",
          true
        );
    }

    indicatorElement.setAttribute("aria-label", `Slide ${i + 1}`);

    indicatorsElement.appendChild(indicatorElement);
  }

  // Crear el elemento de las diapositivas
  const slidesElement = document.createElement("div");
  slidesElement.classList.add("carousel-inner");

  // Crear las diapositivas individuales
  for (let i = 0; i < videojuegosAleatorios.length ; i++) {
    const slideElement = document.createElement("div");
    slideElement.classList.add("carousel-item");

    if (i === 0) {
      slideElement.classList.add("active");
    }

    const imageElement = document.createElement("img");
    imageElement.src = videojuegosAleatorios[i].background_image;
    imageElement.classList.add("d-block", "w-100");
    imageElement.alt = videojuegosAleatorios[i].name;

    slideElement.appendChild(imageElement);

    slidesElement.appendChild(slideElement);
  }

  // Crear los controles del carrusel
  const prevControlElement = document.createElement("button");
  prevControlElement.classList.add("carousel-control-prev");
  prevControlElement.type = "button";
  prevControlElement.dataset.bsTarget = "#carouselExampleIndicators";
  prevControlElement.dataset.bsSlide = "prev";

  const prevIconElement = document.createElement("span");
  prevIconElement.classList.add("carousel-control-prev-icon");
  prevIconElement.ariaHidden = true;

  const prevLabelElement = document.createElement("span");
  prevLabelElement.classList.add("visually-hidden");
  prevLabelElement.textContent = "Previous";

  prevControlElement.appendChild(prevIconElement);
  prevControlElement.appendChild(prevLabelElement);

  const nextControlElement = document.createElement("button");
  nextControlElement.classList.add("carousel-control-next");
  nextControlElement.type = "button";
  nextControlElement.dataset.bsTarget = "#carouselExampleIndicators";
  nextControlElement.dataset.bsSlide = "next";

  const nextIconElement = document.createElement("span");
  nextIconElement.classList.add("carousel-control-next-icon");
  nextIconElement.ariaHidden = true;

  const nextLabelElement = document.createElement("span");
  nextLabelElement.classList.add("visually-hidden");
  nextLabelElement.textContent = "Next";

  nextControlElement.appendChild(nextIconElement);
  nextControlElement.appendChild(nextLabelElement);

  // Añadir los elementos al carrusel
  carouselElement.appendChild(indicatorsElement);
  carouselElement.appendChild(slidesElement);
  carouselElement.appendChild(prevControlElement);
  carouselElement.appendChild(nextControlElement);

  // Añadir el carrusel al documento
  document.querySelector(".galeria").appendChild(carouselElement);
};

construirGaleria();