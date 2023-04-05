const alternativasData = require('../data/AlternativaData')

//serviço de mostrar todas as alternativas
 exports.getAlternativas = function () {
    return alternativasData.getAlternativas();
 };

//serviço de adicionar uma alternativa
 exports.addAlternativa = function (correto, questao_id, auternativa) {
    return alternativasData.addAlternativa(correto, questao_id, auternativa);
 };

 //serviço de atualizar uma alternativa
 exports.updateAlternativa = function (dados) {
    return alternativasData.updateAlternativa(dados);
 };

 //serviço de deletar uma alternativa
 exports.deleteAlternativa = function (id) {
   return alternativasData.deleteAlternativa(id);
 }