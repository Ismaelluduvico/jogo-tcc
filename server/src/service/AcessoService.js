const acessoData = require('../data/AcessoData')

//serviço de adicionar um novo acesso
 exports.addAcesso = function (aluno_id) {
    return acessoData.addAcesso(aluno_id);
 };