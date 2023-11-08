const key = "1813372f26e043d59e35a067ba3a439a";
const user = JSON.parse(localStorage.getItem("user"));

if (user !== null) {
  const globo = document.querySelector(".span-num-videjuegos-carrito");
  const carrito = user.carrito;
  globo.innerHTML = carrito.length;
}

const actualizarGlobo = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user !== null) {
    const globo = document.querySelector(".span-num-videjuegos-carrito");
    const carrito = user.carrito;
    globo.innerHTML = carrito.length;
  }
};

actualizarGlobo();

const getVideojuegos = async () => {
  let page = Math.floor(Math.random() * 20) + 1;
  const videojuegos = await fetch(
    `https://api.rawg.io/api/games?key=${key}&page=${page}`,
    {
      method: "GET",
      cors: "no-cors",
    }
  )
    .then((res) => res.json())
    .then((data) => {
      data.results.forEach((videojuego) => {
        videojuego.precio = (Math.random() * (24000 - 15000) + 15000).toFixed(
          2
        );
      });
      return data.results;
    });
  return videojuegos;
};

const getGeneros = async () => {
  const generos = await fetch(`https://api.rawg.io/api/genres?key=${key}`, {
    method: "GET",
    cors: "no-cors",
  })
    .then((res) => res.json())
    .then((data) => data.results);
  return generos;
};

const obtenerInfoUnJuego = async (id) => {
  const generos = await fetch(
    `https://api.rawg.io/api/games/${id}?key=${key}`,
    {
      method: "GET",
      cors: "no-cors",
    }
  )
    .then((res) => res.json())
    .then((data) => data.results);
  return generos;
};
