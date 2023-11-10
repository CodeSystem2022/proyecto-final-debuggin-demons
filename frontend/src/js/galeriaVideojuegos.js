const key = "1813372f26e043d59e35a067ba3a439a";
let videojuegos = [];

const getVideojuegos = async () => {
  let page = Math.floor(Math.random() * 20) + 1;
  const { data, status } = await axios.get(
    `https://api.rawg.io/api/games?key=${key}&page=${page}`,
    {
      cors: "no-cors",
    }
  );

  if (status === 200) {
    data.results.forEach((videojuego) => {
      videojuegos.push(videojuego)
    })
    videojuegos.map(videojuego => {
      videojuego.precio = (Math.random() * (24000 - 15000) + 15000).toFixed(2);
    });

    localStorage.setItem("videojuegos", JSON.stringify(videojuegos))

  } else {
    console.error("Ocurrio un error al obtener videojuegos.");
  }
};


const construirGaleria = async () => {
  const videojuegos = JSON.parse(localStorage.getItem("videojuegos"))

  const videojuegosAleatorios = [];

  for (let i = 0; i < 5; i++) {
    const videojuegoAleatorio =
      videojuegos[Math.floor(Math.random() * videojuegos.length)];
    videojuegosAleatorios.push(videojuegoAleatorio);
  }

  const carouselElement = document.createElement("div");
  carouselElement.id = "carouselExampleIndicators";
  carouselElement.classList.add("carousel", "slide");
  carouselElement.setAttribute("data-bs-ride", "carousel", "carousel-fade");
  carouselElement.setAttribute("data-interval", "2000");

  const indicatorsElement = document.createElement("div");
  indicatorsElement.classList.add("carousel-indicators");

  for (let i = 0; i < 5; i++) {
    const indicatorElement = document.createElement("button");
    indicatorElement.type = "button";
    indicatorElement.setAttribute(
      "data-bs-target",
      "#carouselExampleIndicators"
    );
    indicatorElement.setAttribute("data-bs-slide-to", `${i}`);
    if (i === 0) {
      indicatorElement.classList.add("active");
      indicatorElement.setAttribute("aria-current", true);
    }

    indicatorElement.setAttribute("aria-label", `Slide ${i + 1}`);

    indicatorsElement.appendChild(indicatorElement);
  }

  const slidesElement = document.createElement("div");
  slidesElement.classList.add("carousel-inner", "img-galeria");

  for (let i = 0; i < videojuegosAleatorios.length; i++) {
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

  carouselElement.appendChild(indicatorsElement);
  carouselElement.appendChild(slidesElement);
  carouselElement.appendChild(prevControlElement);
  carouselElement.appendChild(nextControlElement);

  document.querySelector(".galeria").appendChild(carouselElement);
};

getVideojuegos();
construirGaleria();