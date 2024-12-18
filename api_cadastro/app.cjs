// app.js
const express = require('express');
const cors= require('cors')
const app = express();
app.use(express.json());

// Incluir as controllers
const users = require('./controllers/users.cjs');

// Importando a base de dados
const db = require('./db/models/index.cjs');

app.use('/users', users);

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080");
});


// lembra de criar o middleware Beatriz

app.use(express.json());
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "POST");
    res.header("Access-Control-Expose-Headers", "Content-Type")
    app.use(cors());
    next();




})