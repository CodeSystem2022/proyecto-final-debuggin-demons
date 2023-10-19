const armarGrilla = async() => {

    const videojuegos = await getVideojuegos();
    // Crear un contenedor para la grilla
    const gridContainer = document.querySelector(".grilla");
    gridContainer.classList.add("container d-flex flex-column");

    const grilla = document.createElement('div')
    grilla.id = "tarjetasCarousel";
    grilla.classList.add("carousel", "slide");
    grilla.setAttribute("data-bs-ride", "carousel");

    const carouselInnerDiv = document.createElement("div");
    carouselInnerDiv.classList.add("carousel-inner");

    // Crear las tarjetas
    for (let i = 0; i < videojuegos.length; i++) {
      // Crear 6 tarjetas de ejemplo
      const col = document.createElement("div");
      // col.classList.add("col-lg-4", "col-md-6", "col-sm-12"); // Controla la disposición en función del tamaño de la pantalla

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

      cardBody2.appendChild(cardLink1);
      cardBody2.appendChild(cardLink2);

      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);

      card.appendChild(cardImg);
      card.appendChild(cardBody);
      card.appendChild(listGroup);
      card.appendChild(cardBody2);

      col.appendChild(card);
      carouselInnerDiv.appendChild(col);
    }

    // Agregar la fila al contenedor
    grilla.appendChild(carouselInnerDiv);
    gridContainer.appendChild(grilla)

};

armarGrilla();
