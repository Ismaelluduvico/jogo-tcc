const alunosService = require('../service/AlunoService')

//Adicionar um aluno
exports.post = async (req, res, next) => {
    const {nome, email, senha} = req.body
    await alunosService.addAluno(nome, email, senha)
    res.status(201). send("")
};

//Buscar todos os alunos
exports.get = async(req, res, next) => {
    const alunos = await alunosService.getAlunos()
    res.json(alunos)
};

//Buscar um aluno
exports.getOne = async(req, res, next) => {
    const id = req.params.id;
    const aluno = await alunosService.showAluno(id)
    res.json(aluno)
};

//Atuzlizar um aluno
exports.put = async(req, res, next) => {
    try {
        const id = req.params.id;
    const dados = req.body;
    await alunosService.updateAluno({...dados, id: id})

    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
    } catch (error) {
        console.log(error)
        res.status(500).send("ocorreu um erro")
    }
};
//Deletetar um aluno
exports.delete = async(req, res, next) => {
    try {
        const id = req.params.id;
        await alunosService.deleteAluno(id)
        res.status(200).send(`Requisição recebida com sucesso! ${id}`);
    } catch (error){
        console.log(error)
        res.status(500).send("ocorreu um erro")
    }
};