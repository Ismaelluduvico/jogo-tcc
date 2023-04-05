const database = require('../infra/database');

//Solicitando informações ao banco de dados

//Adicionar um novo acesso
exports.addAcesso = function (aluno_id){
    return database.query(`insert into quantidade_de_acessos (aluno_id) values ('${aluno_id}')`);
};