const dotenv = require("dotenv");

const getVideojuegos = async () => {
  let page = Math.floor(Math.random() * 20) + 1;
  const videojuegos = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.KEY_API}&page=${page}`,
    {
      method: "GET",
    }
  )
    .then((res) => res.json())
    .then((data) => data.results);
  return videojuegos;
};


const getGeneros = async () => {
  const generos = await fetch(
    `https://api.rawg.io/api/genres?key=${process.env.KEY_API}`,
    {
      method: "GET",
    }
  )
    .then((res) => res.json())
    .then((data) => data.results);
  return generos;

};

const obtenerInfoUnJuego = async(id) => {
      const generos = await fetch(
        `https://api.rawg.io/api/games/${id}?key=${process.env.KEY_API}`,
        {
          method: "GET",
        }
      )
        .then((res) => res.json())
        .then((data) => data.results);
      return generos;
}

const getCoincidenciaNombre = async () => {};

const getOferats = async () => {};
