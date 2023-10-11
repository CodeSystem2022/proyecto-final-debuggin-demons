const express = require("express"); //

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hola Debugging Demons!");
});
app.get("/videojuegos", (req, res) => {
  res.send("Lista de videojuegos");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
