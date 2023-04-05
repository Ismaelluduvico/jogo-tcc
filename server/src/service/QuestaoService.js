const questoesData = require('../data/QustaoData')

//serviço de mostrar todos os alunos
 exports.getQuestoes = function () {
    return questoesData.getQuestoes();
 };

//serviço de adicionar um aluno
 exports.addQuestao = function (descricao, dificuldade, capitulo_id) {
    return questoesData.addQuestao(descricao, dificuldade, capitulo_id);
 };

 //serviço de atualizar um aluno
 exports.updateQuestao = function (dados) {
    return questoesData.updateQuestao(dados);
 };

 //serviço de deletar um aluno
 exports.deleteQuestao = function (id) {
   return questoesData.deleteQuestao(id);
 }