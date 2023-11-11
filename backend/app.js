const express = require("express");
const mongoose = require("mongoose"); 
const dotenv = require("dotenv");

const indexRouter = require("./routes/index");
const createError = require("http-errors");

var cors = require("cors");

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use("/", indexRouter);

app.use((req, res, next) => {
  next(createError(404));
});

const port = process.env.PORT || 3000;


mongoose
  .connect(process.env.MONGO_URI)
  .then((res) => console.log("Conectado a la base de datos .. OK"))
  .catch((error) => console.log("Ocurrio un error: " + error));

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

