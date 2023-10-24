const dotenv = require("dotenv");

const getVideojuegos = async () => {
  let page = Math.floor(Math.random() * 20) + 1;
  console.log(page);
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

const getNuevos = async () => {};

const getGeneros = async () => {};

const getCoincidenciaNombre = async () => {};

const getOferats = async () => {};
