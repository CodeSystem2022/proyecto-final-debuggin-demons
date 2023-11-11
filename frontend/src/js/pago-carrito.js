const videojuegosEnCarrito = JSON.parse(localStorage.getItem("carritoCompleto"))
console.log(videojuegosEnCarrito);

const contenedorJusgos = document.querySelector(".contenedor-juegos");

videojuegosEnCarrito.forEach(videojuego => {

    const rowDiv = document.createElement("div");
    rowDiv.className = "row item";

    const col4Div = document.createElement("div");
    col4Div.className = "col-4 align-self-center "; 

    const imgElement = document.createElement("img");
    imgElement.className = "img-fluid";
    imgElement.src = videojuego.background_image;

    const col8Div = document.createElement("div");
    col8Div.className = "col-8";

     const name = document.createElement("div");
     name.className = "row";
     name.innerHTML = `<b>${videojuego.name}</b>`;

    const priceRowDiv = document.createElement("div");
    priceRowDiv.className = "row";
    priceRowDiv.innerHTML = `<b>$ ${videojuego.precio.fixed(2)}</b>`;

    const lipstickRowDiv = document.createElement("div");
    lipstickRowDiv.className = "row text-muted";
    lipstickRowDiv.innerHTML =  videojuego.description.slice(0, 120) + " ...";;

    col4Div.appendChild(imgElement);
    col8Div.appendChild(name);
    col8Div.appendChild(priceRowDiv);
    col8Div.appendChild(lipstickRowDiv);
    rowDiv.appendChild(col4Div);
    rowDiv.appendChild(col8Div);

    contenedorJusgos.appendChild(rowDiv);


    
});

let precioTotal = 0;
videojuegosEnCarrito.forEach((juego) => {
    precioTotal += +juego.precio;
});

const precio = document.querySelector(".subtotal");
precio.innerHTML = "AR$ " + precioTotal;
