import express from 'express'
const router= express.Router();

router.post('/', async (req, res)=>{

    var date= req.body;

    return res.json({
        error: false,
        message: "Mensagem cadastro com sucesso",
        date
    });
});

// module.exports= router; 
export default router;