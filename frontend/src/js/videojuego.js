

const construirVideojuego = () => {
  const container = document.querySelector(".contenedor-videojuego");

  const juego = JSON.parse(localStorage.getItem("videojuegoAmostrar"));


  const row = document.createElement("div");
  row.className = "row";
  row.className = "d-flex";

  const col5 = document.createElement("div");
  col5.className = "col-md-5";

  const mainImg = document.createElement("div");
  mainImg.className = "main-img";

  const mainImage = document.createElement("img");
  mainImage.className = "img-fluid";
  mainImage.src = juego.background_image;
  mainImage.alt = juego.name + "imagen de fondo";

  const previews = document.createElement("div");
  previews.className = "row my-3 previews";

  const previewImages = [
    juego.background_image_additional,
  ];

  previewImages.forEach((src) => {
    const col3 = document.createElement("div");
    col3.className = "col-md-3";
    const previewImage = document.createElement("img");
    previewImage.className = "w-100";
    previewImage.src = src;
    previewImage.alt = "Sale";
    col3.appendChild(previewImage);
    previews.appendChild(col3);
  });

  mainImg.appendChild(mainImage);
  mainImg.appendChild(previews);
  col5.appendChild(mainImg);
  col5.appendChild(mainImg);

  // Info Juego

  const col7 = document.createElement("div");
  col7.className = "col-md-7";
  col7.className = "px-5 text-white";

  const titulo = document.createElement("h5")
  titulo.innerHTML = juego.name;

  const fechaDeEstreno  = document.createElement("p");
  fechaDeEstreno.innerHTML = "Fecha de estreno: " + juego.released;

  const generos = juego.genres;
  const generosHTML = document.createElement("div");
  generosHTML.className = "d-flex align-items-baseline";
  const generoTitle = document.createElement("p");
  generoTitle.innerHTML="Generos: "
  generosHTML.appendChild(generoTitle)

  const listGenerosSpan = generos.map(genero => {
    const span = document.createElement("span");
    span.className = "badge";
    span.innerHTML = genero.name.charAt(0).toUpperCase() + genero.name.slice(1);
    return span
  })
  listGenerosSpan.forEach(generoSpan => generosHTML.appendChild(generoSpan));
  
  // TAGS
  const tags = juego.genres;
  const tagsHTML = document.createElement("div");
  tagsHTML.className = "d-flex align-items-baseline";
  const tagsTitle = document.createElement("p");
  tagsTitle.innerHTML = "Tags: ";
  tagsHTML.appendChild(tagsTitle);

  const listTagSpan = tags.map((tag) => {
    const span = document.createElement("span");
    span.className = "badge";
    span.innerHTML = tag.name.charAt(0).toUpperCase() + tag.name.slice(1);
    return span;
  });
  listTagSpan.forEach((tagSpan) => tagsHTML.appendChild(tagSpan));


  const contenedorDescripcion = document.createElement("div")
  const descripcion = document.createElement("p")
  descripcion.innerHTML = "Descripcion: " + juego.description_raw || juego.description;

  contenedorDescripcion.appendChild(descripcion);

  col7.appendChild(titulo)
  col7.appendChild(fechaDeEstreno)
  col7.appendChild(generosHTML)
  col7.appendChild(tagsHTML)
  col7.appendChild(contenedorDescripcion)

  row.appendChild(col5);
  row.appendChild(col7);
  container.appendChild(row);
}


construirVideojuego();