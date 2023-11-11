const miuser = JSON.parse(localStorage.getItem("user"));

if (miuser !== null) {
  const globo = document.querySelector(".span-num-videjuegos-carrito");
  const carrito = miuser.carrito;
  globo.innerHTML = carrito.length;
}

const getGeneros = async () => {
  const generos = await fetch(`https://api.rawg.io/api/genres?key=${key}`, {
    method: "GET",
    cors: "no-cors",
  })
    .then((res) => res.json())
    .then((data) => data.results);
  return generos;

};

const obtenerInfoUnJuego = async(id) => {
  const { data, status } = await axios.get(`https://api.rawg.io/api/games/${id}?key=${key}`); 

  if (status === 200) {
    return data
  }else{
    console.error("Ocurrio un error al tratar de recuperar el vidojuego id: " + id);
  }
}

const actualizarEstadoCart = () => {
  if (miuser !== null) {
    const globo = document.querySelector(".span-num-videjuegos-carrito");
    const carrito = miuser.carrito;
    globo.innerHTML = carrito.length;
  } else {
    console.error("Ocurrio un error al actualizar el globo");
  }
};

actualizarEstadoCart();