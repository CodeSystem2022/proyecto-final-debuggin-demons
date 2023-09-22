const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/userModel")

dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hola Debugging Demons!");
});
app.get("/videojuegos", (req, res) => {
  res.send("Lista de videojuegos");
});

const cx = mongoose
  .connect(process.env.MONGO_URI)
  .then((res) => console.log("Conectado a la base de datos"))
  .catch((error) => console.log("Ocurrio un error_: " + error));


const user = new User({
  nombre: "John",
  apellido : "Doe",
  email: "johndoe@example.com",
  username : "jlopez",
  password: "123456",
  age: 25,
});


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

const buscarUno = async (vez) => {
  console.log("Buscando ... " + vez);
    const joe = await User.findOne({ nombre: "John" });
    console.log("Usuario ", joe);
} 

const buscarTodos = async (vez) => {
  const todos = await User.find();
  console.log(todos);
}; 

const borraUno = async () => {
  console.log("Borrando ..,");
  const joe = await User.deleteOne({ email: "johndoe@example.com" });
  console.log("Usuario ", joe);
}; 

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
buscarTodos();


app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

