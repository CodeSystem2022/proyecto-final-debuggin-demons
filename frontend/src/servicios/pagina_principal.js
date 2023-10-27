const getVideojuegos = async () => {
  let page = Math.floor(Math.random() * 20) + 1;
  const videojuegos = await fetch(
    `https://api.rawg.io/api/games?key=4c8396ebdb16407383b027c49039f3f8&page=${page}`,
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
    `https://api.rawg.io/api/genres?key=4c8396ebdb16407383b027c49039f3f8`,
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
        `https://api.rawg.io/api/games/${id}?key=4c8396ebdb16407383b027c49039f3f8`,
        {
          method: "GET",
        }
      )
        .then((res) => res.json())
        .then((data) => data.results);
      return generos;
}
