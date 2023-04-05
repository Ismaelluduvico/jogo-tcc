//Arquivo de rotas Professor
const express = require('express');
const router = express.Router();
const controller = require('../controllers/ProfessorController');

//Rota de adicionar um professor
router.post('/', controller.postProf);

//Rota de mostrar todos os alunos 
router.get('/', controller.getProf);

//Rota de mostra um aluno
router.get('/:id', controller.getOneProf);

//Rota de atualizar um aluno
router.put('/:id', controller.putProf);

//Rota de deletar um aluno
router.delete('/:id', controller.deleteProf);

module.exports = router;