const agregarAlCarrito = async (videojuego) => {
  const miUsuario = JSON.parse(localStorage.getItem("user"));

  const body = {
    username: miUsuario.usearname,
    videojuego,
  };

    const {data, status} = await axios.post("http://localhost:3000/carrito", body, {
      cors: "no-cors",
      withCredentials: false,
    });

    if(status === 200 ){
      localStorage.setItem("carrito", JSON.stringify(data));
      actualizarCarrito(username, videojuego);
    }else{
      console.log(error);
    }

};

const actualizarCarrito = async (username) => {

    const { data, status } = await axios.get(`http://localhost:3000/users/${username}`);
    if (status === 200 ) {
      localStorage?.removeItem("carrito")
      localStorage.setItem("carrito", JSON.stringify(data));
    }

};

