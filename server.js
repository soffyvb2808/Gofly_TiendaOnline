const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/formulario", (req, res) => {
  res.sendFile(path.join(__dirname, "formulario.html"));
});

app.get("/galeria", (req, res) => {
  res.sendFile(path.join(__dirname, "galeria.html"));
});

app.get("/precios", (req, res) => {
  res.sendFile(path.join(__dirname, "precios.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
