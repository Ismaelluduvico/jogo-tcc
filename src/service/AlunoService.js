const alunosData = require('../data/AlunoData')

//serviço de mostrar todos os alunos
 exports.getAlunos = function () {
    return alunosData.getAlunos();
 };

//serviço de adicionar um aluno
 exports.addAluno = function (nome, email, senha) {
    return alunosData.addAluno(nome, email, senha);
 };

//serviço de mostrar um aluno
 exports.showAluno = function (id) {
   return alunosData.showAluno(id);
 }

 //serviço de atualizar um aluno
 exports.updateAluno = function (dados) {
    return alunosData.updateAluno(dados);
 };

 //serviço de deletar um aluno
 exports.deleteAluno = function (id) {
   return alunosData.deleteAluno(id);
 }