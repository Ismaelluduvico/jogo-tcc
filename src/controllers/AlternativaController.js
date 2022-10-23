const alternativaService = require('../service/AlternativaService')

//Adicionar uma altenativa
exports.postAlternativa = async (req, res, next) => {
    const {correto, questao_id, auternativa} = req.body
    try {
        await alternativaService.addAlternativa(correto, questao_id, auternativa)
        res.status(201).send(`Requisição recebida com sucesso!`);
    } catch (error){
        console.log(error)
        res.status(500).send("ocorreu um erro")
    }
};

//Buscar todas as alternativas
exports.getAlternativas = async(req, res, next) => {
    const alternativas = await alternativaService.getAlternativas()
    res.json(alternativas)
};

//Atuzlizar uma altenativa
exports.putAlternativa = async(req, res, next) => {
    try {
        const id = req.params.id;
        const dados = req.body;
        await alternativaService.updateAlternativa({...dados, id: id})
        res.status(201).send(`Requisição recebida com sucesso! ${id}`);

    } catch (error) {
        console.log(error)
        res.status(500).send("ocorreu um erro")
    }
};

//Deletetar uma altenativa
exports.deleteAlternativa = async(req, res, next) => {
    try {
        const id = req.params.id;
        await alternativaService.deleteAlternativa(id)
        res.status(200).send(`Requisição recebida com sucesso! ${id}`);
    } catch (error){
        console.log(error)
        res.status(500).send("ocorreu um erro")
    }
};