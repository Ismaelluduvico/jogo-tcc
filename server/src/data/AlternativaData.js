const database = require('../infra/database');

//Solicitando informações ao banco de dados

//Selecionar todas as alternativas
exports.getAlternativas = function (){
    return database.query('select * from alternativas');
};

//Adicionar uma nova alternativa
exports.addAlternativa = function (correto, questao_id, auternativa){
    return database.query(`insert into alternativas (correto, questao_id, auternativa) values ('${correto}', '${questao_id}', '${auternativa}')`);
};

//Atualizar alternativa
exports.updateAlternativa = function ({id, correto, questao_id, auternativa}){
    return database.query(`update alternativas set correto = '${correto}', questao_id = '${questao_id}', auternativa = '${auternativa}' where id = ${id}`);
};

//Excluir alternativa
exports.deleteAlternativa = function (id){
    return database.query(`delete from alternativas where id = ${id} `)
};