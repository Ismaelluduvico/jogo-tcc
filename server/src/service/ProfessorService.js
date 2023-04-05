const professorData = require('../data/ProfessorData')

//serviço de mostrar todos os professores
 exports.getProfessor = function () {
    return professorData.getProfessor();
 };

//serviço de adicionar um professor
 exports.addProfessor = function (nome, email, senha) {
    return professorData.addProfessor(nome, email, senha);
 };

//serviço de mostrar um professor
 exports.showProfessor = function (id) {
   return professorData.showProfessor(id);
 }

 //serviço de atualizar um professor
 exports.updateProfessor = function (dados) {
    return professorData.updateProfessor(dados);
 };

 //serviço de deletar um professor
 exports.deleteProfessor = function (id) {
   return professorData.deleteProfessor(id);
 }