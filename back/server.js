const express = require("express"); // lida com rotas e views
const mongoose = require("mongoose");
const requireDir = require("require-dir")
const cors = require('cors')

// iniciando app
const app = express();
app.use(express.json()) // permitir o envio de dados json
app.use(cors())

mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true})
requireDir('./src/models')

//rotas
app.use('/', require('./src/route'))

app.listen(3001);
