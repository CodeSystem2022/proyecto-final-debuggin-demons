// I,portaciones de librerias externas
const express = require("express");
const mongoose = require("mongoose"); //ODM
const dotenv = require("dotenv"); // Acceder a las variables de entorno


const userRouter =  require("./routes/usuariosRoutes")

// Modelo - Usuarios
const User = require("./models/userModel")

// Uso la lib DotEnv
dotenv.config();

// Uso Express
const app = express();
// Le digo al servidos que trabaje con archivos JSON.
app.use(express.json());
app.use("/", userRouter);

// Definimos el Puerto por el que va a estar ecuchando el servidor
const port = process.env.PORT || 3000;


// Rutas por donde van a ingresar a nuestra API
app.get("/", (req, res) => {
  res.send("Hola Debugging Demons!");
});


app.get("/videojuegos", (req, res) => {
  res.send("Lista de videojuegos");
});




// Conexion a la Base de datos -  Con Mongoose
mongoose
  .connect(process.env.MONGO_URI)
  .then((res) => console.log("Conectado a la base de datos .. OK"))
  .catch((error) => console.log("Ocurrio un error: " + error));

// Guardo en la coleccion de Usuarios (users) un usuario (user)
const guardarUser = async () => {
  const user = new User({
    nombre: "John",
    apellido: "Doe",
    email: "johndoe@example.com",
    username: "jlopez",
    password: "123456",
    age: 25,
  });
  await user.save();
}

// Buscar un usuario
const buscarUno = async (vez) => {
  console.log("Buscando ... " + vez);
    const joe = await User.findOne({ nombre: "John" });
    console.log("Usuario ", joe);
} 

// Buscar todos los usuarios
const buscarTodos = async (vez) => {
  const todos = await User.find();
  console.log(todos);
}; 

//Borrar un videojuego
const borraUno = async () => {
  console.log("Borrando ..,");
  const joe = await User.deleteOne({ email: "johndoe@example.com" });
  console.log("Usuario ", joe);
}; 

//Actualizar un videojuego
const actualizarUsuario = async () => {
    console.log("Actualizando ...");
    const joe = await User.updateOne(
      { username: "jlopez" },
      { apellido: "Moreno" }
    );
    const userActalizado = await buscarUno({ username: "jlopez" });
}

// guardarUser();
// buscarUno(1);
// borraUno();
// buscarUno(2);
// actualizarUsuario();
// buscarTodos();




// Inicio el servidor
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

