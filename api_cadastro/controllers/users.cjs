// const express = require('express');
// const router = express.Router();

// router.post('/', async (req, res) => {

//     var dados= req.body;
//     console.log(dados)

//     await db.Users.create(dados).then((dadosUsuario)=>{
//         return res.json({
//             mensagem: "usuario cadastrado com sucesso",
//             dadosUsuario
//         });
//     }).catch(()=>{
//         return res.json({
//             mensagem: "Erro: Usuário NÃO cadastrado com sucesso!",
//             // dadosUsuario
//         });
//     })
// });

// module.exports = router;

// const db= require('./../db/models/index.cjs')

// // salvar


const express = require('express');
const router = express.Router();
const db = require('./../db/models/index.cjs');


console.log(db.Users);

router.post('/', async (req, res) => {
    var dados = req.body;
    console.log(dados);

    try {
        const dadosUsuario = await db.Users.create(dados);
        return res.json({
            mensagem: "Usuário cadastrado com sucesso",
            dadosUsuario
        });
    } catch (error) {
        console.error(error); 
        return res.json({
            mensagem: "Erro: Usuário NÃO cadastrado com sucesso!"
        });
    }
});

module.exports = router;
