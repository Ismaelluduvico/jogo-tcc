const database = require('../infra/database');

//Solicitando informações ao banco de dados

//Selecionar todos os capitulos
exports.getCapitulo = function (){
    return database.query('select * from capitulo');
};

//Mostra um capitulo
exports.showCapitulo = function (id){
    return database.query(`select * from capitulo where id = ${id}`);
};

//Adicionar um novo capitulo
exports.addCapitulo = function (titulo){
    return database.query(`insert into capitulo (titulo) values ('${titulo}')`);
};

//Atualizar capitulo
exports.updateCapitulo = function ({id,titulo}){
    return database.query(`update capitulo set titulo = '${titulo}' where id = ${id}`);
};

//Excluir capitulo
exports.deleteCapitulo = function (id){
    return database.query(`delete from capitulo where id = ${id} `)
};