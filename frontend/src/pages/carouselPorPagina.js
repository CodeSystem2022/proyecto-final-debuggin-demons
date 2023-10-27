// Crear un contenedor para el carrusel
const carouselPorPagina = async() => {
    const videojuegos = await getVideojuegos();

    const carouselContainer = document.querySelector(".carrouselPagina");
    carouselContainer.classList.add("container");

    // Crear el carrusel
    const carousel = document.createElement("div");
    carousel.classList.add("carousel", "slide");
    carousel.setAttribute("data-ride", "carousel");

    // Crear indicadores (dots) para el carrusel
    const indicators = document.createElement("ol");
    indicators.classList.add("carousel-indicators");

    // Crear tarjetas para el carrusel
    for (let i = 0; i < videojuegos.length; i++) {
    // Crear 3 tarjetas de ejemplo
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.width = "18rem";

    const cardImg = document.createElement("img");
    cardImg.src = videojuegos[i].background_image;
    cardImg.classList.add("card-img-top");
    cardImg.alt = "Chicago Skyscrapers";

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = "Card title";

    const cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.textContent =
        "Some quick example text to build on the card title and make up the bulk of the card's content.";

    const listGroup = document.createElement("ul");
    listGroup.classList.add(
        "list-group",
        "list-group-light",
        "list-group-small"
    );

    const listItems = [
        "Cras justo odio",
        "Dapibus ac facilisis in",
        "Vestibulum at eros",
    ];

    listItems.forEach((itemText) => {
        const listItem = document.createElement("li");
        listItem.classList.add("list-group-item", "px-4");
        listItem.textContent = itemText;
        listGroup.appendChild(listItem);
    });

    const cardBody2 = document.createElement("div");
    cardBody2.classList.add("card-body");

    const cardLink1 = document.createElement("a");
    cardLink1.classList.add("card-link");
    cardLink1.href = "#";
    cardLink1.textContent = "Card link";

    const cardLink2 = document.createElement("a");
    cardLink2.classList.add("card-link");
    cardLink2.href = "#";
    cardLink2.textContent = "Another link";

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody2.appendChild(cardLink1);
    cardBody2.appendChild(cardLink2);

    card.appendChild(cardImg);
    card.appendChild(cardBody);
    card.appendChild(listGroup);
    card.appendChild(cardBody2);

    // Crear indicador (dot) para esta tarjeta
    const indicator = document.createElement("li");
    indicator.setAttribute("data-target", "#carouselExampleIndicators");
    indicator.setAttribute("data-slide-to", i.toString());
    if (i === 0) {
        indicator.classList.add("active");
    }

    indicators.appendChild(indicator);

    // Agregar la tarjeta al carrusel
    carousel.appendChild(card);
    }

    carousel.appendChild(indicators);

    // Agregar carrusel al contenedor
    carouselContainer.appendChild(carousel);
}

carouselPorPagina();
