const capituloService = require('../service/CapituloService')

//Adicionar um capitulo
exports.postCapitulo = async (req, res, next) => {
    const {titulo} = req.body
    await capituloService.addCapitulo(titulo)
    res.status(201). send("")
};

//Buscar todos os capitulos
exports.getCapitulo = async(req, res, next) => {
    const capitulo = await capituloService.getCapitulo()
    res.json(capitulo)
};

//Buscar um capitulo
exports.getOneCapitulo = async(req, res, next) => {
    const id = req.params.id;
    const capitulo = await capituloService.showCapitulo(id)
    res.json(capitulo)
};

//Atuzlizar um capitulo
exports.putCapitulo = async(req, res, next) => {
    try {
        const id = req.params.id;
    const dados = req.body;
    await capituloService.updateCapitulo({...dados, id: id})

    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
    } catch (error) {
        console.log(error)
        res.status(500).send("ocorreu um erro")
    }
};
//Deletetar um capitulo
exports.deleteCapitulo = async(req, res, next) => {
    try {
        const id = req.params.id;
        await capituloService.deleteCapitulo(id)
        res.status(200).send(`Requisição recebida com sucesso! ${id}`);
    } catch (error){
        console.log(error)
        res.status(500).send("ocorreu um erro")
    }
};