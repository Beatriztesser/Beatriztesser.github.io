import express from 'express';
const app= express();

import messages from './controllers/messages.js';

// criar um middleware
// (um função que sera executada antes de acesar 
// a rota) para recebe os dados no corpo ds requisição
app.use(express.json())

import db from "./db/models/index.js";

app.use('/message', messages);

app.listen(8080, ()=>{
    console.log("servidor inicado na porta 8080")
})