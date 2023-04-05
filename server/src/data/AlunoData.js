const database = require('../infra/database');

//Solicitando informações ao banco de dados

//Selecionar todos os alunos
exports.getAlunos = function (){
    return database.query('select * from aluno');
};

//Mostra um aluno
exports.showAluno = function (id){
    return database.query(`select * from aluno where id = ${id}`);
};

//Adicionar um novo aluno
exports.addAluno = function (nome, senha){
    return database.query(`insert into aluno (nome, senha) values ('${nome}', '${senha}')`);
};

//Atualizar Aluno
exports.updateAluno = function ({id, nome, senha}){
    return database.query(`update aluno set nome = '${nome}', senha = '${senha}' where id = ${id}`);
};

//Excluir Aluno
exports.deleteAluno = function (id){
    return database.query(`delete from aluno where id = ${id} `)
};