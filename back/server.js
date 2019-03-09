const express = require("express"); // lida com rotas e views
const mongoose = require("mongoose");
const requireDir = require("require-dir")

// iniciando app
const app = express();
app.use(express.json()) // permitir o envio de dados json

//rotas
app.use('/api', require('./src/route'))

app.listen(3001);