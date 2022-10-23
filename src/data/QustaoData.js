const database = require('../infra/database');

//Solicitando informações ao banco de dados

//Selecionar todas as questoes
exports.getQuestoes = function (){
    return database.query('select * from questao');
};

//Adicionar uma nova questao
exports.addQuestao = function (descricao, dificuldade, capitulo_id){
    return database.query(`insert into questao (descricao, dificuldade, capitulo_id) values ('${descricao}', '${dificuldade}', '${capitulo_id}')`);
};

//Atualizar questao
exports.updateQuestao = function ({id, descricao, dificuldade, capitulo_id}){
    return database.query(`update questao set descricao = '${descricao}', dificuldade = '${dificuldade}', capitulo_id = '${capitulo_id}' where id = ${id}`);
};

//Excluir questao
exports.deleteQuestao = function (id){
    return database.query(`delete from questao where id = ${id} `)
};