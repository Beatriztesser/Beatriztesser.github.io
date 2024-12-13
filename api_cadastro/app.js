import express from 'express';

const app= express();

const messages= require ('./controllers/messages')

app.listen(8080),()=>{
    console.log('Servidor iniciado na porta 8080')
}

app.get