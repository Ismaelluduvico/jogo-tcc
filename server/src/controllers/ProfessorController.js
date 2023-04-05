const professorService = require('../service/ProfessorService')

//Adicionar um um professor
exports.postProf = async (req, res, next) => {
    const {nome, email, senha} = req.body
    await professorService.addProfessor(nome, email, senha)
    res.status(201). send("")
};

//Buscar todos os professores
exports.getProf = async(req, res, next) => {
    const professores = await professorService.getProfessor()
    res.json(professores)
};

//Buscar um aluno
exports.getOneProf = async(req, res, next) => {
    const id = req.params.id;
    const professor = await professorService.showProfessor(id)
    res.json(professor)
};

//Atuzlizar um aluno
exports.putProf = async(req, res, next) => {
    try {
        const id = req.params.id;
    const dados = req.body;
    await professorService.updateProfessor({...dados, id: id})

    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
    } catch (error) {
        console.log(error)
        res.status(500).send("ocorreu um erro")
    }
};

//Deletetar um aluno
exports.deleteProf = async(req, res, next) => {
    try {
        const id = req.params.id;
        await professorService.deleteProfessor(id)
        res.status(200).send(`Requisição recebida com sucesso! ${id}`);
    } catch (error){
        console.log(error)
        res.status(500).send("ocorreu um erro")
    }
};