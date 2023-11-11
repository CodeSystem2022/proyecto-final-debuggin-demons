const key_api = "1813372f26e043d59e35a067ba3a439a";

const metodosDePagos = async () => {
    const { data, status } = await axios.get(
      `http://localhost:3000/metodos-de-pago`
    );
    if (status === 200) {
      localStorage.setItem("metodos", JSON.stringify(data))
    } else {
      console.error("No se pudo obtener los metodos de pago");
    }

}

const login = async (e) => {
  e.preventDefault();

  const inputUsername = document.querySelector("#input-username-login").value;
  const inputPassword = document.querySelector("#input-password-login").value;

  const { data, status } = await axios.post("http://localhost:3000/auth/login", 
  {
    username: inputUsername,
    password: inputPassword
  });

  if(status === 200){
    localStorage.setItem("user", JSON.stringify(data.user));
    location.href = "/frontend";

  }else{
    console.log("No se pudo logear");
  }
};

const obtenerInformacionUnJuego = async (id) => {
  
  const { data, status } = await axios.get(
    `https://api.rawg.io/api/games/${id}?key=${key_api}`
  );
  if (status === 200) {
    return data;
  } else {
    console.error("Ocurrio un error al buscar el carrito.");
  }
};

const obtenerVidejuegosCarrito = async () => {

  const userLog = JSON.parse(localStorage.getItem("user"));

  if (userLog !== null) {
    const { data, status } = await axios.get(
      `http://localhost:3000/carrito?username=${userLog.username}`
    );
    if (status == 200) {
      if (data.length) {
        localStorage.setItem("carrito", JSON.stringify(data));
      }
    }

    let videojuegosEnCarrito = [];
    for (const videojuego of data) {
      const juego = await obtenerInformacionUnJuego(videojuego);
      videojuegosEnCarrito.push(juego);
    }
    videojuegosEnCarrito.map((juego) => {
      juego.precio = (Math.random() * (24000 - 15000) + 15000).toFixed(2);
    });
    localStorage.setItem(
      "carritoCompleto",
      JSON.stringify(videojuegosEnCarrito)
    );
  }
};


metodosDePagos();
obtenerVidejuegosCarrito();

