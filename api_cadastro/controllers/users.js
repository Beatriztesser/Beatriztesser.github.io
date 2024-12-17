import express from 'express';
const router= express.Router();


router.post('/', async(req, res)=>{
    return res.json({
        mensagem: "usuario cadastrado com sucesso"
  })
})
export default router;

