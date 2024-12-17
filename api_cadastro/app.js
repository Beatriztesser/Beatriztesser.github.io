import express from 'express';
const app= express()
app.use(express.json());

// incluir as controllers
import users from './controllers/users.js';

app.use('/users', users);

app.listen(8080, ()=>{
    console.log("Servidor iniciado na porta 8080")
})
