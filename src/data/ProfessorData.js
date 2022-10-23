const database = require('../infra/database');

//Solicitando informações ao banco de dados

//Selecionar todos os professores
exports.getProfessor = function (){
    return database.query('select * from professor');
};

//Mostra um professor
exports.showProfessor = function (id){
    return database.query(`select * from professor where id = ${id}`);
};

//Adicionar um novo professor
exports.addProfessor = function (nome, email, senha){
    return database.query(`insert into professor (nome, email, senha) values ('${nome}', '${email}', '${senha}')`);
};

//Atualizar Professor
exports.updateProfessor = function ({id, nome, email, senha}){
    return database.query(`update professor set nome = '${nome}', email = '${email}', senha = '${senha}' where id = ${id}`);
};

//Excluir Professor
exports.deleteProfessor = function (id){
    return database.query(`delete from professor where id = ${id} `)
};