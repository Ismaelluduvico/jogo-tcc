const alunosService = require('../service/AcessoService')

//Adicionar um acesso
exports.post = async (req, res, next) => {
    const {aluno_id} = req.body
    await alunosService.addAcesso(aluno_id)
    res.status(201). send("")
};